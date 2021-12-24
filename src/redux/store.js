import {createStore} from 'redux';
import shopReducer from './shopReducer';
import { composeWithDevTools } from 'redux-devtools-extension'; // it is just for extension redux

const store = createStore(shopReducer, composeWithDevTools());

export default store;