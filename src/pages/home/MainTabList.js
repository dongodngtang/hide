import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollTabView, WebViewPage, HomeScrollTabBar} from '../../components';
import {Colors} from '../../themes';
import DatingPage from './DatingPage';
import ActivityPage from './ActivityPage';


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
                renderTabBar={props => <HomeScrollTabBar
                    backgroundColor={Colors.white}
                    activeTextColor="#F34A4A"
                    inactiveTextColor={Colors._444}
                    textStyle={{fontSize: 15}}
                    style={{height: 44, backgroundColor: 'white'}}
                    underlineStyle={{backgroundColor: '#F34A4A', height: 2}}
                />}>
                {
                    this.state.tabs.map((tab, index) => {

                        switch (index) {
                            case 0:
                                return <DatingPage
                                    tabLabel={tab.name}
                                    key={`page${index}`}/>;

                            case 1:
                                return <WebViewPage
                                    key={`page${index}`}
                                    hideNav={true}
                                    tabLabel={tab.name}
                                    url={'https://mp.weixin.qq.com/s/9N_JehE1pyy7hLzFoVolHw'}/>;
                            case 2:
                                return <ActivityPage
                                    key={`page${index}`}
                                    tabLabel={tab.name}/>;
                            default:
                                return <WebViewPage
                                    key={`page${index}`}
                                    hideNav={true}
                                    tabLabel={tab.name}
                                    url={'https://m.weibo.cn/p/index?containerid=102803'}/>
                        }

                    })
                }

            </ScrollTabView>

        </View>
    }


    renderTab = () => {

        return <View>

        </View>
    }


}