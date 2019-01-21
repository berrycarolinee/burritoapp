import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import GMError from './components/gm_error.js';

import * as serviceWorker from './serviceWorker';

window.gm_authFailure = () => {
  ReactDOM.render(<GMError />, document.getElementById('root'));
}


ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.register();
