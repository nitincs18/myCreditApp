import 'materialize-css/dist/css/materialize.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
//import { HashRouter, Route, Switch } from 'react-router-dom'
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import createHistory from 'history/createBrowserHistory'
// import injectTapEventPlugin from 'react-tap-event-plugin';
import registerServiceWorker from './registerServiceWorker';
import store from './store';
// import reduxThunk from 'redux-thunk';
// import reducers from './reducers';

import './index.css';
// import AppAdmin from './containers/app-admin';
// import Header from './components/Header';
import App from './components/App';


// const Header = () => <h2>Header</h2>
// const Dashboard = () => <h2>Dashboard</h2>
// const SurveyNew = () => <h2>SurveyNew</h2>
// const Landing = () => <h2>Landing</h2>

// <div className="container">
//         <BrowserRouter>
//         <div> 
//         <Header />   
//         <Route exact={true} path="/" component={Landing} />
//         <Route exact path="/surveys" component={Dashboard} />
//         <Route path="/surveys/new" component={SurveyNew} />
            
//         </div>
//         </BrowserRouter>
//         </div>  

ReactDOM.render(
    <Provider store={store}>
         <App /> 
    </Provider>, document.getElementById('root')
);

registerServiceWorker();