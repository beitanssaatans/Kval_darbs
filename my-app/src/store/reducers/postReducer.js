const initState = {
    posts: [
        {id: '1', title: 'Title ayee', content: 'viki viki pak'},
        {id: '2', title: 'Title buyahhhh', content: 'viki viki pak'},
        {id: '3', title: 'Title fckm', content: 'viki viki pak'}
     ]
}

const postReducer = (state = initState, action) =>{
    switch (action.type) {
        case 'CREATE_POST':
            console.log('created post', action.post);
            return state;
        case 'CASE_POST_ERROR':
            console.log('create post error', action.err)
            return state;
        default:
            return state;
    }
}

export default postReducer