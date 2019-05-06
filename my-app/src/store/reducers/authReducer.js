const initState = {
    authError: null
}
 

const authReducer = (state = initState, action) =>{
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login failed')
            return {
                ...state, 
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success')
            return{
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('Signout success');
            return state;
        case 'CREATE_USER_SUCCESS':
            console.log('New user created')
            return{
                ...state,
                authError: null
            }
        case 'CREATE_USER_ERROR':
            console.log('Failed to create user')
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state;
    }
}

export default authReducer