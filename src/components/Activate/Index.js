import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Activate = (props) => {
    const active = useSelector(state => state.activate),
        dispatch = useDispatch();


    const handleActivate = () => {
        dispatch(props.activateActions.activate());
    }

    const handleDeactivate = () => {
        dispatch(props.activateActions.deactivate());
    }

    return (
        <section className="row">
            {active ? (
                <div className="col m12  center-align">
                    <h4>Go ahead !</h4>

                    <button className="waves-effect waves-light btn-large red darken-1 pulse" onClick={handleDeactivate}>Lock</button>
                </div>
            ) : (
                <div className="col m12 center-align">
                    <h4>Sorry you have to unlock it first :(</h4>
                    
                    <button className="waves-effect waves-light btn-large light-green lighten-1 pulse" onClick={handleActivate}>Unlock</button>
                </div>
            )}
        </section>
    );
}

export default Activate;