import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import Offers  from './components/offers';
import Checkout from './components/Checkout';
import PaymentStatus from './components/PaymentStatus';
import registerServiceWorker from './registerServiceWorker';
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import {rechargeStore} from './rechargeStore.js';
import reducers from './reducer/rootReducer.js'
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom'

const store = createStore(reducers);


window.store = store;

ReactDOM.render(<Provider  store={store}>
<Router>
<Switch>
    <Route exact path="/" render = {()=>(<App/>)}/>
    <Route exact path = "/plans" render = {()=>(<Offers /> )} />
    {//history.push("/")
    }
    <Route exact path = "/checkout" render = {()=>(<Checkout />)} />
    <Route exact path = "/paymentstatus" render = {()=>(<PaymentStatus />)} />
</Switch>   
</Router>
    </Provider>, document.getElementById('root'));
registerServiceWorker();
//<Route exact path="/" component={App} />
/*<Route exact path = "/plans" render = {()=>(<Offers />)} />*/