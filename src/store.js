
import {applyMiddleware, createStore} from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import reducers from "./reducers";
import promise from 'redux-promise-middleware';

export default createStore(reducers,applyMiddleware(thunk,logger,promise()));