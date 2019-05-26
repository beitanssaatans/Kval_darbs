export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorID = getState().firebase.auth.uid;
      firestore.collection('posts').add({
        ...post,
        authorFirstName: profile.firstName,
        authorLastName: profile.lastName,
        authorID: authorID,
        createdAt: new Date()
      }).then(()=>{
        dispatch({type: 'CREATE_POST', post });
      }).catch((err) =>{
        dispatch({ type: 'CREATE_POST_ERROR', err});
      })
    }
};

export const editPost = (postId, post) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore();

    firestore.update({ collection: 'posts', doc: postId }, { ...post, createdAt: new Date()})
        .then((data)=>{
            console.log('ok', data)
        }).catch((err) => {
            console.log(err);
    });
  }
};


export const deletePost = (postId) => {
  return (dispatch, getState, { getFirebase, getFirestore}) => {
    const firestore = getFirestore();
    console.log('post ID',postId)
      firestore.delete({ collection: 'posts', doc: postId })
          .then((res)=>{
          console.log('izdzēsts', res);
      }).catch((err)=>{
          console.log(err)
      });
  }
};