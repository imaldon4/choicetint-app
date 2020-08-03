import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function Button() {
    return <button>Test</button>;
}

ReactDOM.render(
    React.createElement(Button),
    document.getElementById('root')
);