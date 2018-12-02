const functions = require('firebase-functions');
const watson = require('watson-developer-cloud/assistant/v1');
require('dotenv').config();

const cors = require('cors')({ origin: true });

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//     response.send("Hello from Firebase!");
// });

const chatbot = new watson({
    username: process.env.USERNAME,
    password: process.env.PASSWORD,
    version: process.env.VERSION,
});

const workspace_id = process.env.WORKSPACE_ID;

exports.dialog = functions.https.onRequest((request, response) => {
    cors(request, response, () => {
        let payload = {
            workspace_id,
            context: request.body.context || {},
            input: request.body.input || {}
        };
    
        chatbot.message(payload, (err, data) => {
            if(err) {
                return response.status(err.code || 500).json(err);
            }
            return response.json(handleResponse(payload, data));
        });
    })
});

const handleResponse = (payload, data) => {
    console.log("Watson disse: " + data.output.text[0]);
    return data;
}