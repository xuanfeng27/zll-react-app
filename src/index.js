import React from 'react';
import ReactDOM from 'react-dom';
import AllApp from './AllApp';
import registerServiceWorker from './registerServiceWorker';
import {Provider} from 'react-redux'
import store from './store'


ReactDOM.render( <Provider store={store}>
    <AllApp/>
</Provider>, document.getElementById('root'));
registerServiceWorker();
