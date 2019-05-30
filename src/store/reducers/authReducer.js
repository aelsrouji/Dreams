const initState = {
    authError: null
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'Login_Error':
            console.log('login error');
            return {
                ...state,
                authError: 'Login Failed'
            }
        case 'Login_Seccess':
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'Signout_Seccess':
            console.log('Signout Success');
            return {
                state
            }
        case 'Signup_Seccess':
            return {
                ...state,
                authError: null
            }
        case 'Signup_Error':
            console.log('Error signup');
            return {
                ...state,
                authError: action.err.message
            }
        default:
            return state
    }

}

export default authReducer
