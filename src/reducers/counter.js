const counter = (state = 0, action) => {
    switch(action.type){
        case 'increment':
            return state + 1;
            
        case 'decrement':
            if(state === 0){
                return 0;
            }else{
                return state - 1;
            }
    
        default:
            return state;
    }
}

export default counter;