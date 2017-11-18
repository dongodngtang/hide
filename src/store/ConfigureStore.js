import {createStore,applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './index';

//异步
const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function configureStore(initialState) {
    //将Store和reducer绑定

    return  createStoreWithMiddleware(rootReducer,initialState);
}