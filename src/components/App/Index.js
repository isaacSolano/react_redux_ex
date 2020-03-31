import React from 'react';

import allActions from 'actions/allActions';

import Counter from 'components/Counter/Index';
import Activate from 'components/Activate/Index';

const App = () => {
    return(
        <main className="container">
            <Activate
                activateActions={allActions.activateActions}
            />

            <Counter 
                counterActions={allActions.counterActions}
            />
        </main>
    )
}

export default App;