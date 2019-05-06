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

const createNotification = (notification => {
    return admin.firestore().collection('notifications')
    .add(notification)
    .then(doc => console.log('new user created', doc));
})


exports.userCreated = functions.auth.user()
    .onCreate(user => {
        
        return admin.firestore().collection('users')
            .doc(user.uid).get().then(doc => {
                const newUser = doc.data();
                const notification = {
                    content: 'New user created succesfully',
                    user: `${newUser.firstName} ${newUser.lastName}`,
                    time: admin.firestore.FieldValue.serverTimestamp()
                }
            return createNotification(notification);
            })

    }
)