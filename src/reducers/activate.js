const activate = (state = false, action) => {
    switch (action.type){
        case 'activate':
            return true;

        case 'deactivate':
            return false;

        default:
            return state;
    }
}

export default activate;