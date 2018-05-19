/**
 * Created by lorne on 2017/12/23
 * Function:
 * Desc:
 */


import React, {PureComponent} from 'react'

import {View, Text} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';

export default class ListPage extends PureComponent {

    render() {
        return <View style={{flex: 1, padding: 17}}>
            <RkButton
                onPress={() => {
                    global.router.toLogin()
                }}
                style={{
                    height: 44, width: '100%',
                    backgroundColor: 'red'
                }}>
                登录
            </RkButton>

        </View>

    }
}
