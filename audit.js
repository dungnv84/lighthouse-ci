import { execSync } from 'child_process';
import { exec } from 'child_process';
import pLimit from 'p-limit';

const CONCURRENCY_LIMIT = 10;

async function fetchDomains() {
  try {
    const apiUrl = process.env.DOMAINS_API_URL;
    const apiToken = process.env.DOMAINS_API_TOKEN;
    if (!apiUrl) throw new Error('Missing DOMAINS_API_URL');

    const headers = apiToken ? { 'X-API-KEY': apiToken } : {};
    const response = await fetch(apiUrl, { headers });
    if (!response.ok) throw new Error(API failed: ${response.status});

    const data = await response.json();
    const domains = data.data.map(domain => https://${domain});
    if (!domains.length) throw new Error('No domains found');
    return domains;
  } catch (err) {
    console.error('Fetch error:', err.message);
    process.exit(1);
  }
}

async function runLighthouseCI() {
  const domains = await fetchDomains();
  const limit = pLimit(CONCURRENCY_LIMIT);

  console.log(\n🚀 Starting collection for ${domains.length} domains with concurrency = ${CONCURRENCY_LIMIT});

  const collectPromises = domains.map(domain => 
    limit(() => new Promise((resolve) => {
      const cmd = lhci collect --url=${domain} --numberOfRuns=1;
      console.log(▶️ Running: ${cmd});
      exec(cmd, (error, stdout, stderr) => {
        if (error) {
          console.error(❌ Error collecting ${domain}: ${stderr});
          resolve({ domain, status: 'failed' });
        } else {
          console.log(✅ Done collecting ${domain});
          resolve({ domain, status: 'success' });
        }
      });
    }))
  );

  const results = await Promise.all(collectPromises);
  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.length - successCount;

  console.log(\n📊 Collection done: ✅ ${successCount}, ❌ ${errorCount});

  if (successCount === 0) {
    console.log('No successful reports to upload. Exiting.');
    process.exit(1);
  }

  try {
    console.log(\n☁️ Uploading all reports...);
    execSync('lhci upload', { stdio: 'inherit' });
    console.log('\n✅ All done!');
  } catch (err) {
    console.error('Upload failed:', err);
    process.exit(1);
  }
}

runLighthouseCI();