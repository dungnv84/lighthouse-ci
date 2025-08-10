module.exports = {
  ci: {
    collect: {
      numberOfRuns: 1,
      url: [
        'https://phuongnt4.dev-kiotvietweb.fun/',
        'https://test19.dev-kiotvietweb.fun/',
        'https://taphoadd12.dev-kiotvietweb.fun/',
        'https://facebook.com/',
        'https://dantri.com.vn/',
        'https://vnexpress.net/',
        'https://zingnews.vn/',
        'https://tuoitre.vn/',
        'https://vietnamnet.vn/',
        'https://laodong.vn/',
        'https://cafef.vn/',
        'https://danviet.vn/',
        'https://vov.vn/'
      ],
    },
    upload: {
      target: 'lhci',
      serverBaseUrl: 'http://admin:admin@lighthouse-ci.local/',
      token: '807b06ae-996b-4b61-8c7e-1fd62aff813c',
    }
  }
};
// lhci collect --url='https://phuongnt4.dev-kiotvietweb.fun/' --numberOfRuns=1
// lhci collect --url='https://test19.dev-kiotvietweb.fun/' --numberOfRuns=1
// lhci collect --url='https://taphoadd12.dev-kiotvietweb.fun/' --numberOfRuns=1
// lhci collect --url='https://facebook.com/' --numberOfRuns=1
// lhci collect --url='https://dantri.com.vn/' --numberOfRuns=1
// lhci collect --url='https://vnexpress.net/' --numberOfRuns=1
// lhci collect --url='https://zingnews.vn/' --numberOfRuns=1
// lhci collect --url='https://tuoitre.vn/' --numberOfRuns=1
// lhci collect --url='https://vietnamnet.vn/' --numberOfRuns=1
// lhci collect --url='https://laodong.vn/' --numberOfRuns=1
// lhci collect --url='https://cafef.vn/' --numberOfRuns=1
// lhci collect --url='https://danviet.vn/' --numberOfRuns=1

