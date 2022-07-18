import React from 'react';
import ReactDOM, { hydrate, render } from 'react-dom';
import Routes from './Routes';

const rootElement = document.getElementById('root');
if (rootElement.hasChildNodes()) {
    hydrate(<Routes />, rootElement);
} else {
    render(<Routes />, rootElement);
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
