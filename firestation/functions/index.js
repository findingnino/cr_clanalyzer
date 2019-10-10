const functions = require('firebase-functions');
const admin = require('firebase-admin');
const fetch = require("cross-fetch");
admin.initializeApp();

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//

//https://us-central1-cr-clanalyzer.cloudfunctions.net/helloWorld
exports.helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

// Take the text parameter passed to this HTTP endpoint and insert it into the
// Realtime Database under the path /messages/:pushId/original
//https://us-central1-cr-clanalyzer.cloudfunctions.net/helloWorld
exports.addMessage = functions.https.onRequest(async (req, res) => {
    // Grab the text parameter.
    const original = req.query.text;
    // Push the new message into the Realtime Database using the Firebase Admin SDK.
    const snapshot = await admin.database().ref('/messages').push({original: original});
    // Redirect with 303 SEE OTHER to the URL of the pushed object in the Firebase console.
    res.redirect(303, snapshot.ref.toString());
  });


//https://us-central1-cr-clanalyzer.cloudfunctions.net/findIPaddress
exports.findIPaddress = functions.https.onRequest(async (req, res) => {
    fetch("http://httpbin.org/ip")
    .then(result => result.json())
    .then(result => res.send(result))
    .catch(err => res.send(err));
});


//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQxOWFhMjY1LWJjZDMtNDhhZS05ZjFhLWY1OWFmNDEyZTliZSIsImlhdCI6MTU3MDU3ODM5NCwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDcuMTc4LjIzMS4yNDQiXSwidHlwZSI6ImNsaWVudCJ9XX0.pq91LlBJd7GmRMfMetyeZ5CyWaYYZOdfxeHBxaedOrYCnm4Ja2l8PciCtCPmPhJfo44ImD8KS0CThG9N1mk9Fw
//https://us-central1-cr-clanalyzer.cloudfunctions.net/clanalyzertesting
exports.clanalyzertesting = functions.https.onRequest(async (req, res) => {
    const url = "https://api.clashroyale.com/v1/clans/%2388QY8QQV/warlog"
    const key = req.query.key;

    let headers = {
        'Accept': 'application/json',
        'authorization': 'Bearer ' + key,
    };

    fetch(url, {
        method: 'Get',
        headers: headers,
    }).then(result => result.json())
      .then(result => res.send(JSON.stringify(result)))
      .catch(err => res.send(err))

});

//eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjQxOWFhMjY1LWJjZDMtNDhhZS05ZjFhLWY1OWFmNDEyZTliZSIsImlhdCI6MTU3MDU3ODM5NCwic3ViIjoiZGV2ZWxvcGVyL2Y3OTQ0YTA1LTg5YzQtNDdhMS0xMzdjLWM3NGRjMDA2MTU2YSIsInNjb3BlcyI6WyJyb3lhbGUiXSwibGltaXRzIjpbeyJ0aWVyIjoiZGV2ZWxvcGVyL3NpbHZlciIsInR5cGUiOiJ0aHJvdHRsaW5nIn0seyJjaWRycyI6WyIxMDcuMTc4LjIzMS4yNDQiXSwidHlwZSI6ImNsaWVudCJ9XX0.pq91LlBJd7GmRMfMetyeZ5CyWaYYZOdfxeHBxaedOrYCnm4Ja2l8PciCtCPmPhJfo44ImD8KS0CThG9N1mk9Fw
//https://us-central1-cr-clanalyzer.cloudfunctions.net/clanalyzertestingwithenvvar
exports.clanalyzertestingwithenvvar = functions.https.onRequest(async (req, res) => {
    const url = "https://api.clashroyale.com/v1/clans/%2388QY8QQV/warlog"
    const key = functions.config().clashroyale.key;

    let headers = {
        'Accept': 'application/json',
        'authorization': 'Bearer ' + key,
    };

    fetch(url, {
        method: 'Get',
        headers: headers,
    }).then(result => result.json())
      .then(result => res.send(JSON.stringify(result)))
      .catch(err => res.send(err))

});


//https://us-central1-cr-clanalyzer.cloudfunctions.net/printclashkey
exports.printclashkey = functions.https.onRequest((req, res) => {
    
    const wildcard = functions.config().clashroyale.key;
    
    res.send("Hello World");
    res.send(wildcard);
});