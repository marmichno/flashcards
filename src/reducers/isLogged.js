const isLoggedReducer = (state = false, action) =>{
    switch(action.type){
        case 'LOGOUT':
            localStorage.clear();
            return false;
        case 'LOG_IN':
            return true;
        default:
            return state;
    }
}

export default isLoggedReducer;