import { getMessaging } from 'firebase-admin/messaging';

var admin = require("firebase-admin");
var serviceAccount = require("path/to/serviceAccountKey.json");
const firebase = admin.initializeApp ( {
    credential: admin.credential.cert(serviceAccount)
});

export const sendMessage = getMessaging(firebase);
