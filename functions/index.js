// sudo npm install -g firebase-tools
// set up cloud function, refer to lesson-33 



// this funciton will run on firebase server, not in the browser
const functions = require('firebase-functions');

// we will be able to use admin SDK to interact with
// different services like authentication or firestore service
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send("Hello ninjas!");
});

const createNotification = (notification) => {
  return admin.firestore().collection('notifications')
  .add(notification)
  .then(doc => console.log('notification added', doc))
}

exports.projectCreated = functions.firestore
  .document('projects/{projectId}')
  .onCreate(doc => {

    const project = doc.data();
    const notification = {
      content: 'Added a new project',
      user: `${project.authorFirstName} ${project.authorLastName}`,
      time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createNotification(notification);
});