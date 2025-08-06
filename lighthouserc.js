module.exports = {
  ci: {
    collect: {
      url: [
        'https://phuongnt4.dev-kiotvietweb.fun/',
        'https://test19.dev-kiotvietweb.fun/',
        'https://taphoadd12.dev-kiotvietweb.fun/'
      ],
      numberOfRuns: 1,
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://admin:admin@lighthouse-ci.local/',
      token: '829f9553-e766-4e69-8342-4d12662908e8',
    },
  },
};


// export DOMAINS_API_URL="https://gateway.dev-kiotvietweb.fun/api/v2/merchants/domain/list-domain-devops?page=1&perPage=10"
// export DOMAINS_API_TOKEN="Dc3GWSOBlHOEXxnzQhL0"
// export LHCI_SERVER_URL="http://admin:admin@lighthouse-ci.local/"
// export LHCI_TOKEN="b3741a45-7ba9-4ba4-a105-2b23b766209e"