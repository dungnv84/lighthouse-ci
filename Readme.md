npm i @lhci/cli

lhci wizard
? Which wizard do you want to run? new-project
? What is the URL of your LHCI server? http://admin:admin@lighthouse-ci.local/
? What would you like to name the project? lighthouse-ci
? Where is the project's code hosted? https://github.com/dungnv84/lighthouse-ci
? What branch is considered the repo's trunk or main branch? main
Created project lighthouse-ci (068c3328-9eca-42aa-a8d4-87f8546ee8ad)!
Use build token 807b06ae-996b-4b61-8c7e-1fd62aff813c to add data.
Use admin token iulhtEotBabZVSdQTn2EVqNtlIDiCpIvlZoCe1TA to manage data. KEEP THIS SECRET!

git add .
git commit -m "hehe"

export LHCI_BUILD_CONTEXT__CURRENT_HASH=$(git rev-parse HEAD)
export LHCI_BUILD_CONTEXT__BRANCH="main"
export LHCI_BUILD_CONTEXT__COMMIT_TIME=$(date -u +%Y-%m-%dT%H:%M:%SZ)
export LHCI_BUILD_CONTEXT__COMMIT_MESSAGE="Manual upload at $(date)"

lhci collect --url=https://phuongnt4.dev-kiotvietweb.fun/ --url=https://test19.dev-kiotvietweb.fun/ --url=https://dantri.com.vn/  
lhci collect --url=https://vnexpress.net/ --url=https://tuoitre.vn/ --url=https://vietnamnet.vn/  --output-dir=.lighthouseci/batch3

lhci upload --input-dir=.lighthouseci/batch1
lhci upload --input-dir=.lighthouseci/batch3


<!-- lhci collect -->
lhci upload --verbose

lhci collect --url=https://phuongnt4.dev-kiotvietweb.fun/ --url=https://test19.dev-kiotvietweb.fun/ --url=https://dantri.com.vn/   --output-dir=.lighthouseci/batch1 
lhci collect --url=https://vnexpress.net/ --url=https://tuoitre.vn/ --url=https://vietnamnet.vn/  --output-dir=.lighthouseci/batch3

lhci upload --input-dir=.lighthouseci/batch1
lhci upload --input-dir=.lighthouseci/batch3


git add .
git commit -m "hehe"
export LHCI_BUILD_CONTEXT__CURRENT_HASH=$(git rev-parse HEAD)
export LHCI_BUILD_CONTEXT__BRANCH="main"
export LHCI_BUILD_CONTEXT__COMMIT_TIME=$(date -u +%Y-%m-%dT%H:%M:%SZ)
export LHCI_BUILD_CONTEXT__COMMIT_MESSAGE="Manual upload at $(date)"
cd batch1 && lhci collect --config=../lighthouserc.batch1.js
cd ..
cd batch3 && lhci collect --config=../lighthouserc.batch3.js
cd ..
 lhci upload --outputDir=batch1
# Run and upload Batch 3
lhci collect --config=../lighthouserc.batch3.js
lhci upload --config=lighthouserc.batch3.js

lhci upload --config=.lighthouserc.batch3.js