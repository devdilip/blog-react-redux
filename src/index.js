import React from 'react';
import ReactDOM from 'react-dom';
import './styles/style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import AddPost from "../src/components/AddPost";
import SinglePost from "../src/components/SinglePost";
import Posts from "../src/components/Posts";
import store from './store';
import EditPost from "../src/components/EditPost"

ReactDOM.render(
    <Provider store={store}  >
        <Router>
            <Switch>
                <Route exact path={`/`} component={App} />
                <Route path={`/post/:id`} component={SinglePost} />
                <Route path={`/addPost`} component={AddPost} />
                <Route path={`/posts`} component={Posts} />
                <Route path={`/editpost/:id`} component={EditPost} />
            </Switch>
        </Router>
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();