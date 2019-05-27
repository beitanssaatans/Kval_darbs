
// Raksta izveide
export const createPost = (post) => {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
      //Tiek izveidoti savienojimi ar datubāzi, lai izmantotu tur jau esošos datus
      const firestore = getFirestore();
      const profile = getState().firebase.profile;
      const authorID = getState().firebase.auth.uid;
      //Norāda kur tiks glabāta
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
            
        }).catch((err) => {
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