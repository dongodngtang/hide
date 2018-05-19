import {Actions, Scene, ActionConst, Tabs} from 'react-native-router-flux';
import React from 'react';

import {TagPage} from './home/TabNav';
import WebViewPage from '../components/WebViewPage';
import QRScannerPage from './home/QRScannerPage';
import Login from './account/Login';

const routes = [

    {key:'Login',component:Login},
    {key:'QRScannerPage',component:QRScannerPage},
    {key:'WebViewPage',component:WebViewPage},
];

export const Stacks = Actions.create(
    <Scene key="root">

        <Scene key="Main" initial hideNavBar>
            {TagPage()}
        </Scene>

        {routes.map(item=> <Scene key={item.key} component={item.component} hideNavBar/>)}


    </Scene>);