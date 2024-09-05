import { useState } from "react";

export default function Count() {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(count => count + 1);
    };

    const decrease = () => {
        setCounter(count => count - 1);
    };

    const reset = () => {
        setCounter(0)
    }
    return (
        <div >
          <div className="box">

          <h1> <i>Counter </i></h1>
            <div className="btn">
                <button className="control__btn" onClick={decrease}>-</button>
                <span className="counter__output"> <i> {counter} </i></span>
                <button className="control__btn" onClick={increase}>+</button>

            </div>
            <button className="reset" onClick={reset}>Reset</button>

          </div>
        </div>
    )
}
