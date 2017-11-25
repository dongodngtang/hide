import {Actions, Scene, ActionConst, Tabs} from 'react-native-router-flux';
import React from 'react';

import {TagPage} from './home/TabNav';
import WebViewPage from '../components/WebViewPage';

export const Stacks = Actions.create(
    <Scene key="root">

        <Scene key="Main" initial hideNavBar>
            {TagPage()}
        </Scene>

        <Scene key={'WebViewPage'} component={WebViewPage} hideNavBar/>
    </Scene>);