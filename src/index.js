// React stuff
import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
// Componentes
import App from './App';
  
// Conectar la App
ReactDOM.render(<App/>, document.getElementById('root'));
serviceWorker.unregister();
