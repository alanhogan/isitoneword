import React from 'react';
import { createRenderer } from 'fela'
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-fela'

const renderer = createRenderer();

ReactDOM.render(<Provider renderer={renderer}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
