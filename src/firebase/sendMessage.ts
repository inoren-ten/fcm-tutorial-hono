import { getMessaging } from 'firebase-admin/messaging';

var admin = require("firebase-admin");
var serviceAccount = require("../serviceAccountKey.json");
const firebase = admin.initializeApp ( {
    credential: admin.credential.cert(serviceAccount)
});

export const sendMessage = getMessaging(firebase);
