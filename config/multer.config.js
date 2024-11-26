const multer = require('multer');
const firebaseStorage = require('multer-firebase-storage');
const admin = require('firebase-admin');  // Import the entire firebase-admin module
const serviceAccount = require('../drive-84e86-firebase-adminsdk-7yfcx-91cd6dc95f.json');

const storage = firebaseStorage({
    bucketName: "drive-84e86.firebasestorage.app",
    credentials: admin.credential.cert(serviceAccount),
    unique:true
});

const upload = multer({
    storage: storage,
});

module.exports = upload;
