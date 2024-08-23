import React from 'react';
import ReactDOM from 'react-dom';
import AppRouters from './routers/AppRouters';
import configureStore from './store/configureStore';
import { Provider } from 'react-redux';


const jsx = (
    <Provider store={configureStore}>
        <AppRouters />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('app'))



