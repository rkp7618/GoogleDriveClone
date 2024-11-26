const Firebase=require('firebase-admin')
const serviceAccount=require('../drive-84e86-firebase-adminsdk-7yfcx-91cd6dc95f.json')

const firebase=Firebase.initializeApp({
    credential:Firebase.credential.cert(serviceAccount),
    storageBucket:"drive-84e86.firebasestorage.app"
})
module.exports=Firebase