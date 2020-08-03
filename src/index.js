import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import './index.css';

// useState() is a hook, so that it hooks this symbl to this state.
function Button() {
    const [counter, setCounter] = useState(5);
    const handleClick = () => setCounter(counter + 1);
    return (<button onClick={handleClick}>
        {counter}
    </button>
    );
}

// Display (does not have state of it's own)
function Display(){
    return (
        <div>...</div>
    );
}

// App
function App(){
    return (
        <React.Fragment>
            <Button />
            <Display />
        </React.Fragment>
    );
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);