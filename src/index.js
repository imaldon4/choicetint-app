import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

function Hello() {
    return <div>Hello React!</div>;
}

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
);