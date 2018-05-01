// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: true,
  firebaseConfig : {
    apiKey: "AIzaSyDImRcPMwmrMdLlyxiRsMgwp8RtzVKGuO4",
    authDomain: "endlesskiosk.firebaseapp.com",
    databaseURL: "https://endlesskiosk.firebaseio.com",
    projectId: "endlesskiosk",
    storageBucket: "endlesskiosk.appspot.com",
    messagingSenderId: "765781925541"
  }
};
