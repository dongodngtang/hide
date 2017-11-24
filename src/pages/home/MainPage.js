import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {Container} from '../../components';
import TopNavMain from './TopNavMain';
import MainTabList from './MainTabList';

export default class MainPage extends Component {

    render() {
        return (<Container>
            <TopNavMain/>
            <MainTabList/>
        </Container>)
    }

}