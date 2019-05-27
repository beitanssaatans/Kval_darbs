const initState = {
    posts: [
        {id: '', 
        title: '', 
        content: ''}
     ]
}


/*Post reducer skatās vai tiek vai netiek izveidots raksts  un ērti var atgriezt kļūdas vai 
apstiprinājuma paziņojumu*/
const postReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'CREATE_POST':
        //console.log('created post', action.post);
            return state;
        case 'CASE_POST_ERROR':
          //  console.log('create post error', action.err)
            return state;
        default:
            return state;
    }
}

export default postReducer