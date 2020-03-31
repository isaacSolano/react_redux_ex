import counter from 'reducers/counter';
import activate from 'reducers/activate';

import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    counter,
    activate
});

export default rootReducer;