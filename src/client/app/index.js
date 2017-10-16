import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './components/App';
import store from './store';

const AppWrapper = () => (
    <Provider store={store}>
        <App/>
    </Provider>
);

ReactDOM.render(<AppWrapper />, document.getElementById('app'));

