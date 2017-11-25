import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import Hike from './pages/index';
import Router from './service/Router';


const store = configureStore();

export default class Root extends Component {

    constructor(props) {
        super(props);
        global.router = global.router || new Router();
    }

    render() {
        return (

            <Provider store={store}>
                <Hike/>
            </Provider>
        )
    }
}