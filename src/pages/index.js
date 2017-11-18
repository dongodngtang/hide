import React, {Component} from 'react';
import {Router} from 'react-native-router-flux';
import {Stacks} from './StackRoute';




export default class App extends Component {
    render() {
        return (<Router
            scenes={Stacks}/>);
    }
}