module.exports = {
    ci: {
      collect: {
        numberOfRuns: 1,
        url: [
          'https://phuongnt4.dev-kiotvietweb.fun/'
        ],
      },
      upload: {
        target: 'lhci',
        serverBaseUrl: 'http://admin:admin@lighthouse-ci.local/',
        token: '807b06ae-996b-4b61-8c7e-1fd62aff813c',
      },
    },
  };