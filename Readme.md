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
git push
export LHCI_BUILD_CONTEXT__CURRENT_HASH=$(git rev-parse HEAD)
export LHCI_BUILD_CONTEXT__BRANCH="main"
export LHCI_BUILD_CONTEXT__COMMIT_TIME=$(date -u +%Y-%m-%dT%H:%M:%SZ)
export LHCI_BUILD_CONTEXT__COMMIT_MESSAGE="Manual upload at $(date)"
<!-- lhci collect -->
lhci upload --verbose