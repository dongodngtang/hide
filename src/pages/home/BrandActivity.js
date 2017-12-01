/**
 * Created by lorne on 2017/12/1
 * Function:
 * Desc:品牌活动
 */

import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {UltimateListView, FastImage, Icon} from '../../components';
import {Colors} from '../../themes';

export default class BrandActivity extends Component {

    render() {
        return <UltimateListView
            keyExtractor={(item, index) => `${index}activityList`}
            displayDate
            arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
            refreshableMode={Platform.OS === 'ios' ? 'advanced' : 'basic'}
            onFetch={this.onFetch}
            separator={() => <View style={{
                height: 1,
                backgroundColor: Colors._ECE, width: '100%'
            }}/>}
            item={this.renderItem}
        />
    }

    onFetch = (page, post, end) => {
        try {

            if (page === 1) {
                setTimeout(() => {
                    post([1, 2, 3, 4, 5, 6], 6)
                }, 1000)
            }

        } catch (e) {
            end();
        }
    };

    renderItem = (item, index) => {
        return <View style={styles.item}>
            <FastImage
                source={{uri: 'http://static.doyouhike.net/files/2017/11/25/0/0c91a997cef447c62e1c51f425f265bf.jpg'}}
                style={styles.banner}/>
            <View style={{flexDirection: 'row'}}>
                <View style={{padding: 10, flex: 1}}>
                    <Text style={styles.title}>2017汕尾市第二届环品清湖25公里徒步</Text>
                    <Text style={styles.time}>报名时间：2017-11-27 10:00至2017-12-10 18:00</Text>
                </View>
                <Text style={[styles.time, {marginTop: 10}]}>报名关闭</Text>

            </View>

        </View>
    }
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 10,
    },
    banner: {
        height: 200,
        width: '100%'
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
        color: Colors._444
    },
    time: {
        fontSize: 14,
        color: Colors._666
    }

})