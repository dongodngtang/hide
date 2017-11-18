import React, {Component} from 'react';
import {Platform} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './store/ConfigureStore';
import Hike from './pages/index';


const store = configureStore();

export default class Root extends Component{

    render() {
        return (

            <Provider store={store}>
                <Hike/>
            </Provider>
        )
    }
}