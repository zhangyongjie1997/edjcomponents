import Fingerprint2 from "fingerprintjs2";

function getUdid() {
  return new Promise(resolve => {
    Fingerprint2.getV18(
      {
        excludes: {
          fonts: true,
          audio: true,
          fontsFlash: true,
          openDatabase: true,
          webglVendorAndRenderer: true,
          hasLiedLanguages: true,
          hasLiedResolution: true,
          hasLiedOs: true,
          hasLiedBrowser: true,
          canvas: true,
          webgl: true,
          enumerateDevices: true
        },
        extraComponents: [
          {
            key: "customKey",
            getData: function(done) {
              done(Date.now());
            }
          }
        ]
      },
      function(result) {
        resolve(result);
      }
    );
  }).catch(() => Promise.resolve(""));
}

export default getUdid;
