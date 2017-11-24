import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollTabView} from '../../components';
import {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {Colors} from '../../themes';
import DatingPage from './DatingPage';


export default class MainTabList extends Component {

    state = {
        tabs: [{name: 'AA约伴', id: 1},
            {name: '帐篷节', id: 2},
            {name: '易行活动', id: 3},
            {name: '俱乐部', id: 4},
            {name: '攻略线路', id: 5},
            {name: '资讯', id: 6},
            {name: '视频', id: 7}]
    };

    render() {
        return <View style={{flex: 1}}>
            <ScrollTabView
                renderTabBar={props => <ScrollableTabBar
                    backgroundColor={Colors.white}
                    activeTextColor="#F34A4A"
                    inactiveTextColor={Colors._444}
                    textStyle={{fontSize: 15}}
                    style={{height: 44, backgroundColor: 'white'}}
                    underlineStyle={{backgroundColor: '#F34A4A', height: 2}}
                />}>
                {this.state.tabs.map((tab, index) => {
                    return <DatingPage
                        tabLabel={tab.name}
                        key={`page${index}`}/>
                })}

            </ScrollTabView>

        </View>
    }


}