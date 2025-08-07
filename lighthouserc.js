module.exports = {
  ci: {
    upload: {
      target: 'lhci',
      serverBaseUrl: process.env.LHCI_SERVER_URL,
      token: process.env.LHCI_TOKEN,
    },
  },
};

// 4fU4qFJH0jOTZlzBy62pgpg1RByHOsaEwE5kbJLo
// export DOMAINS_API_URL="https://gateway.dev-kiotvietweb.fun/api/v2/merchants/domain/list-domain-devops?page=1&perPage=10"
// export DOMAINS_API_TOKEN="Dc3GWSOBlHOEXxnzQhL0"
// export LHCI_SERVER_URL="http://admin:admin@lighthouse-ci.local/"
// export LHCI_TOKEN="b3741a45-7ba9-4ba4-a105-2b23b766209e"