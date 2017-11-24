import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Scene, Stack, Tabs} from 'react-native-router-flux';
import MainPage from './MainPage';

export class TabNav extends Component {

    render() {

        const {index} = this.props.navigationState;

        let list = ['首页', '发现', '消息', '我的'];

        return (<View style={styles.tabView}>
            {list.map((item, num) => {
                return <TouchableOpacity
                    onPress={() => this.selectTab(num)}
                    style={styles.btnTab}>
                    <Text style={index === num ? styles.txtSelected : styles.txtSelect}>{item}</Text>

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
                component={MainPage}
                title={'news'}

            />
        </Stack>
        <Stack
            key="tab_3"
        >
            <Scene
                key="tab_msg"
                component={MainPage}
                title={'Messages'}

            />
        </Stack>
        <Stack
            key="tab_4"
        >
            <Scene
                key="tab_Me"
                component={MainPage}
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
        justifyContent: 'center',
        backgroundColor: 'blue'
    },
    txtSelect: {
        color: 'green'
    },
    txtSelected: {
        color: 'red'
    }
});