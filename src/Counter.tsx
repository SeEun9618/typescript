import React, { useState } from "react";

interface CounterState {
    count: number;
    step: number;
}

function Counter() {
    const [state, setState] = useState<CounterState>({ count: 0, step: 1 });

    const onIncrease = () => {
        setState({ ...state, count: state.count + state.step });
    };
    const onDecrease = () => {
        setState({ ...state, count: state.count - state.step });
    };
    const onChangeStep = (e: React.ChangeEvent<HTMLInputElement>) => {
        const step = Number(e.target.value);
        setState({ ...state, step });
    };

    return (
        <div>
            <h1>{state.count}</h1>
            <div>
                <button onClick={onIncrease}>+{state.step}</button>
                <button onClick={onDecrease}>-{state.step}</button>
            </div>
            <div>
                <label htmlFor="step-input">Step:</label>
                <input
                    id="step-input"
                    type="number"
                    value={state.step}
                    onChange={onChangeStep}
                />
            </div>
        </div>
    );
}

export default Counter;