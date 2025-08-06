module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
      url: [
        'https://phuongnt4.dev-kiotvietweb.fun/',
        'https://test19.dev-kiotvietweb.fun/',
        'https://taphoadd12.dev-kiotvietweb.fun/',
      ],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://admin:admin@lighthouse-ci.local/',
      token: 'b04dd69f-d04a-4b05-ba7f-0be497bd478c',
    },
  },
};


// 4fU4qFJH0jOTZlzBy62pgpg1RByHOsaEwE5kbJLo
// export DOMAINS_API_URL="https://gateway.dev-kiotvietweb.fun/api/v2/merchants/domain/list-domain-devops?page=1&perPage=10"
// export DOMAINS_API_TOKEN="Dc3GWSOBlHOEXxnzQhL0"
// export LHCI_SERVER_URL="http://admin:admin@lighthouse-ci.local/"
// export LHCI_TOKEN="b3741a45-7ba9-4ba4-a105-2b23b766209e"