import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Scene, Stack, Tabs} from 'react-native-router-flux';
import MainPage from './MainPage';
import {Icon} from '../../components';
import {Colors} from '../../themes';
import Sample from '../Sample';
import ListPage from '../ListPage';


export class TabNav extends Component {

    render() {

        const {index} = this.props.navigationState;

        let list = [{
            name: '首页',
            icon: 'home'
        }, {name: '发现', icon: 'bandcamp'},
            {name: '关注', icon: 'commenting-o'},
            {name: '我的', icon: 'user-o'}];

        return (<View style={styles.tabView}>
            {list.map((item, num) => {
                return <TouchableOpacity
                    key={`nav${num}`}
                    onPress={() => this.selectTab(num)}
                    style={styles.btnTab}>
                    <Icon
                        color={index === num ? Colors._blue : Colors._444}
                        name={item.icon}
                        size={18}/>
                    <Text style={index === num ? styles.txtSelected : styles.txtSelect}>{item.name}</Text>

                </TouchableOpacity>
            })}


        </View>)
    }

    selectTab = (index) => {
        const {jumpToIndex} = this.props;
        jumpToIndex(index)
    }

}

export const TagPage = () => {
    return <Tabs
        style={styles.tabs}
        lazy
        key="Navigation"
        showLabel={false}
        tabBarPosition={'bottom'}
        swipeEnabled={false}
        tabBarComponent={TabNav}
    >

        <Stack
            key="tab_1"
        >
            <Scene
                key="tab_home"
                component={MainPage}
                hideNavBar

            />
        </Stack>

        <Stack
            key="tab_2"
        >
            <Scene
                key="tab_news"
                component={ListPage}
                title={'news'}

            />
        </Stack>
        <Stack
            key="tab_3"
        >
            <Scene
                key="tab_msg"
                component={Sample}
                title={'Messages'}

            />
        </Stack>
        <Stack
            key="tab_4"
        >
            <Scene
                key="tab_Me"
                component={Sample}
                title={'Me'}

            />
        </Stack>

    </Tabs>
};

const styles = StyleSheet.create({
    tabView: {
        height: 44,
        width: '100%',
        flexDirection: 'row'
    },
    btnTab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    txtSelect: {
        color: Colors._444,
        fontSize: 12,
        marginTop: 3
    },
    txtSelected: {
        color: Colors._blue,
        fontSize: 12,
        marginTop: 3
    }
});