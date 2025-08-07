const { execSync } = require('child_process');
const { exec } = require('child_process');
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
    console.error('Fetch error:', err.message);
    process.exit(1);
  }
}

async function runLighthouseCI() {
  const domains = await fetchDomains();
  
  console.log(`\n==================================================`);
  console.log(`🚀 Starting parallel collection for ${domains.length} domains...`);
  console.log(`==================================================`);

  // 1. Tạo một mảng các "lời hứa", mỗi lời hứa là một lệnh collect
  const collectPromises = domains.map(domain => {
    return new Promise((resolve, reject) => {
      const collectCommand = `lhci collect --url=${domain} --numberOfRuns=1`;
      console.log(`Queueing: ${collectCommand}`);

      exec(collectCommand, (error, stdout, stderr) => {
        if (error) {
          console.error(`❌ Error collecting for ${domain}: ${stderr}`);
          resolve({ domain, status: 'failed', error: stderr });
          return;
        }
        console.log(`✅ Finished collecting for ${domain}`);
        resolve({ domain, status: 'success' });
      });
    });
  });

  // 2. Chờ cho TẤT CẢ các lệnh collect hoàn thành
  const results = await Promise.all(collectPromises);
  const successCount = results.filter(r => r.status === 'success').length;
  const errorCount = results.length - successCount;

  console.log(`\n--- Collection Complete ---`);
  console.log(`✅ Success: ${successCount} | ❌ Failed: ${errorCount}`);

  if (successCount === 0) {
      console.log('No successful reports to upload. Exiting.');
      process.exit(1); // Thoát và báo lỗi nếu không có report nào thành công
  }

  // 3. Sau khi tất cả đã collect xong, chạy upload một lần duy nhất
  try {
    console.log(`\n==================================================`);
    console.log(`☁️ Uploading all reports to LHCI server...`);
    console.log(`==================================================`);
    // Dùng execSync ở đây vì đây là bước cuối cùng, cần chạy xong mới kết thúc
    execSync('lhci upload', { stdio: 'inherit' });
    console.log('\n✨ --- All tasks completed! --- ✨');
  } catch (error) {
    console.error('LHCI upload failed:', error);
    process.exit(1);
  }
}

// Bắt đầu thực thi
runLighthouseCI();