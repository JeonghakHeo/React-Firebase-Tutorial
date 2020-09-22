// sudo npm install -g firebase-tools
// set up cloud function, refer to lesson-33 

// this funciton will run on firebase server, not in the browser
const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  // functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello ninjas!");
});
