import ReactDom from 'react-dom';
import React from 'react';
import { useState } from 'react';

const App = () => {
    const [input, setInput] = useState('');
    const [code, setCode] = useState('');

    const onClick = () => {
        console.log(input);
    }

    return <div>
        <textarea value={input} onChange={e => setInput(e.target.value)}></textarea>
        <div>
            <button onClick={onClick}>Submit</button>
        </div>
        <pre>{ }</pre>
    </div >;
}

ReactDom.render(
    <App />,
    document.querySelector('#root')
);