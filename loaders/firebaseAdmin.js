const admin = require("firebase-admin");
const serviceAccountKey = require("../constants/serviceAccountKey");

function connectFirebaseAdmin() {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccountKey),
  });
}

module.exports = connectFirebaseAdmin;
