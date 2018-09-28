import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import {rechargeStore} from './rechargeStore.js';
import {reducer1} from './reducer/reducer1.js'
import { BrowserRouter as Router, Route } from 'react-router-dom'

const store = createStore(reducer1,rechargeStore);
ReactDOM.render(<Provider  store={store}>
<Router>
<Route exact path="/" render = {()=>(<App/>)}  />
</Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
//<Route exact path="/" component={App} />