import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom'

import 'semantic-ui-css/semantic.min.css';

ReactDOM.render((
  <BrowserRouter>
  <App />
  </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();

if (module.hot) {
  module.hot.accept();
}