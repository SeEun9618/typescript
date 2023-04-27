import React, { useState } from "react";

interface CounterState {
    count: number;
    step: number;
    maxCount: number;
}

function Counter(): JSX.Element {
    const [state, setState] = useState<CounterState>({
        count: 0,
        step: 1,
        maxCount: 10,
    });

    const onIncrease = (): void => {
        setState((prevState) => {
            const nextCount = prevState.count + prevState.step;
            return {
                ...prevState,
                count: nextCount > state.maxCount ? state.maxCount : nextCount,
            };
        });
    };
    const onDecrease = (): void => {
        setState((prevState) => {
            const nextCount = prevState.count - prevState.step;
            return {
                ...prevState,
                count: nextCount < 0 ? 0 : nextCount
            };
        });
    };
    const onChangeStep = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const step: number = Number(e.target.value);
        setState((prevState) => ({ ...prevState, step }));
    };

    const onChangeMaxCount = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const maxCount: number = Number(e.target.value);
        setState((prevState) => ({ ...prevState, maxCount }));
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
                    type="number"
                    value={state.step}
                    onChange={onChangeStep}
                    min={1}
                    max={state.maxCount}
                />
            </div>
            <div>
                <label htmlFor="max-count-input">Max Count:</label>
                <input
                    type="number"
                    value={state.maxCount}
                    onChange={onChangeMaxCount}
                    min={state.count}
                    max={Number.MAX_SAFE_INTEGER}
                />
            </div>
        </div>
    );
}

export default Counter;
