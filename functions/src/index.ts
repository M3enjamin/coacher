import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

// Start writing Firebase Functions
// https://firebase.google.com/docs/functions/typescript


// export const helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

export const createUserOnFirstConnection = functions.auth.user().onCreate((user) => {
  admin.initializeApp();

  const newUser = {
    uid: user.data.uid,
    displayName: user.data.displayName,
    email: user.data.email,
    photoURL: user.data.photoURL
  }

  return admin.firestore().collection('users').doc(user.data.uid).set(newUser).then((writeResult) => {
    console.log({ result: 'User with ID: ' + newUser.uid + ' added.' });
    // Send back a message that we've succesfully written the message
    return { result: 'User with ID: ' + newUser.uid + ' added.' };
  });
});
