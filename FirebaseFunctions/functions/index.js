const functions = require('firebase-functions');


// Create and Deploy Your First Cloud Functions
// 
// The Firebase Admin SDK to access the Firebase Realtime Database.
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendDataChangedNotification = functions.database.ref('').onUpdate(event=>{
	var topic = 'FIREBASE_DATA_CHANGE';

	var message = {
	  topic: topic
	};

	// Send a message to devices subscribed to the provided topic.
	admin.messaging().send(message)
	  .then((response) => {
	    // Response is a message ID string.
	    console.log('Successfully sent message:', response);
	    return null;
	  })
	  .catch((error) => {
	    console.log('Error sending message:', error);
	  });
	})