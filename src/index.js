import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';


function Button() {
    return <button onClick={()=>console.log(Math.random())}>Click me</button>
}

ReactDOM.render(
    <Button />,
    document.getElementById('root')
);