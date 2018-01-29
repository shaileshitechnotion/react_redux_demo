import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Inputform from './container/InputForm';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';  
import { store } from './store/reduxdemo';

ReactDOM.render(
    <Provider store={store}>
    <Inputform />
  </Provider>
, 
document.getElementById('root')
);
registerServiceWorker();
