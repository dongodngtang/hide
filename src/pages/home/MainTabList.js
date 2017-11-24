import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {ScrollTabView, UltimateListView} from '../../components';
import {ScrollableTabBar} from 'react-native-scrollable-tab-view';
import {Colors} from '../../themes';


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
                renderTabBar={props => <ScrollableTabBar/>}>
                {this.state.tabs.map((tab, index) => {
                    return <UltimateListView
                        key={`activity${index}`}
                        tabLabel={tab.name}
                        keyExtractor={(item, index) => `${index}list`}
                        displayDate
                        arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
                        refreshableMode="advanced"
                        onFetch={this.onFetch}
                        separator={() => <View style={{
                            height: 1,
                            backgroundColor: Colors._ECE, width: '100%'
                        }}/>}
                        item={this.renderItem}
                    />
                })}

            </ScrollTabView>

        </View>
    }

    renderItem = (item, index) => {
        return <View style={{height: 100, width: '100%', backgroundColor: 'white'}}>
            <Text>{item}</Text>
        </View>

    };

    onFetch = (page, post, end) => {
        try {
            if (page === 1) {
                post([1, 2, 3, 4, 5, 6], 6)
            }

        } catch (e) {
            end();
        }
    }
}