import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';


function Button() {
    const [counter, setCounter] = useState(0);
    return <button onClick={() => setCounter(counter + 1)}>{counter}</button>;
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
);