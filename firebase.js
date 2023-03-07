const { initializeApp, cert } = require("firebase-admin/app");
const { getFirestore, collection, getDocs } = require("firebase-admin/firestore");
const cred = require("./cert/crud-node-183fd-firebase-adminsdk-suggn-d384cbe005.json");

initializeApp({
  credential: cert(cred),
});

const db = getFirestore();

module.exports = db;
