const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase)

exports.helloWorld = functions.https.onRequest((request, response) => {
response.send("Just testin");
 });

const createRecentPost = (recentPost => {
    return admin.firestore().collection('recentPosts')
    .add(recentPost)
    .then(doc => console.log('recent post added', doc));
})


exports.postCreated = functions.firestore
.document('posts/{postId}')
.onCreate(doc => {
    const post = doc.data();
    const recentPost = {
        title: `${post.title}`,
        time: admin.firestore.FieldValue.serverTimestamp()
    }

    return createRecentPost(recentPost);

})