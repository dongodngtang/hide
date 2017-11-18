import {Actions, Scene, ActionConst, Tabs} from 'react-native-router-flux';
import React from 'react';

import MainPage from './home/MainPage';

export const Stacks = Actions.create(
    <Scene key="root">

        <Scene key="MainPage" component={MainPage} initial title={'Home'}/>
    </Scene>);