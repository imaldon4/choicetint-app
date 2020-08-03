import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';

// useState() is a hook, so that it hooks this symbl to this state.
function Button(props) {
    // const handleClick = () => setCounter(counter + 1);
    return (
        <button onClick={props.onClickFunction}>
            +1
        </button>
    );
}

// Display (does not have state of it's own)
function Display(props) {
    return (
        <div>{props.message}</div>
    );
}

// App
function App() {
    const [counter, setCounter] = useState(5);
    const incrementCounter = () => setCounter(counter +1);
    return (
        <React.Fragment>
            <Button onClickFunction={incrementCounter}/>
            <Display message={counter}/>
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);