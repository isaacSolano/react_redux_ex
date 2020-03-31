import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

const Counter = (props) => {
    const counter = useSelector( state => state.counter ),
        active = useSelector( state => state.activate ),
        dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(props.counterActions.increment());
    }
    const handleDecrease = () => {
        dispatch(props.counterActions.decrement());
    }

    return(
        <main className="container">
            <section className="row">
                <h2 className="col m12 center-align">Counter is: {counter}</h2>
            </section>

            <section className="row">
                <div className="col m6 center-align">
                    <button className={`waves-effect waves-light btn-large ${!active && "disabled"}`} onClick={handleIncrease}>Increment</button>
                </div>

                <div className="col m6 center-align">
                    <button className={`waves-effect waves-light btn-large ${!active && "disabled"}`} onClick={handleDecrease}>Decrement</button>
                </div>
            </section>
        </main>
    )
}

export default Counter;