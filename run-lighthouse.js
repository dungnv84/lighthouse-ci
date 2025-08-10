const { execSync } = require('child_process');
const fetch = require('node-fetch'); // cần thiết nếu bạn dùng NodeJS < 18

async function fetchDomains() {
  try {
    const apiUrl = process.env.DOMAINS_API_URL;
    const apiToken = process.env.DOMAINS_API_TOKEN;

    if (!apiUrl) throw new Error('Missing DOMAINS_API_URL');

    const headers = apiToken ? { 'X-API-KEY': apiToken } : {};

    const response = await fetch(apiUrl, { headers });
    if (!response.ok) throw new Error(`API failed: ${response.status}`);

    const data = await response.json();
    const domains = data.data.map(domain => `https://${domain}`);

    if (!domains.length) throw new Error('No domains found');
    return domains;
  } catch (err) {
    console.error('❌ Fetch error:', err.message);
    process.exit(1);
  }
}

async function run() {
  const domains = await fetchDomains();
  let ok = 0, fail = 0;

  for (const domain of domains) {
    console.log(`\n▶️ Collecting LHCI for ${domain}`);
    try {
      execSync(`lhci collect --url=${domain}`, { stdio: 'inherit' });
      ok++;
    } catch (err) {
      console.error(`❌ Collect failed: ${domain}`);
      fail++;
    }
  }

  console.log(`\n🚀 Uploading all collected results`);
  try {
    execSync(`lhci upload`, { stdio: 'inherit' });
    console.log(`✅ Upload thành công`);
  } catch (err) {
    console.error(`❌ Upload thất bại`);
  }

  console.log(`\n🎯 Tổng kết: ${ok} domain thành công, ${fail} domain thất bại`);
}

run();

1