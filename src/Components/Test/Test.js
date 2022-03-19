import React, { useState } from 'react';

const Test = (props) => {
    const [count, setCount] = useState(0);

    const plus = () => {
        // console.log('plus');
        setCount(count + 1);
    };
    const minus = () => {
        // console.log('minus');
        setCount(count - 1);
    };
    return (
        <div>
            <div className='count mt-5'>
            <h1 className='text-success text-white bg-primary p-3 m-5 '>Count Value: {count}</h1>
                <button onClick = {plus} className='ms-3 p-3 fw-bolder'> + </button>
                <button onClick = {minus} className='ms-3 p-3 fw-900'> - </button>
            </div>
        </div>
    );
};

export default Test;