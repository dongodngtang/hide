/**
 * Created by lorne on 2017/11/29
 * Function:
 * Desc:
 */
import React, {Component} from 'react';
import {
    FlatList,
    View,
    Platform,
    Text,
    StyleSheet
} from 'react-native';

import {UltimateListView, FastImage, CardMedia, Icon} from '../../components';
import {Colors} from '../../themes'

let moment = require('moment');

let files = ['http://c1.zdb.io/files/recommend/2017/09/12/d/d06e4d89a2a77225f8460094f6d87b0b.jpg',
    'http://c1.zdb.io/files/recommend/2017/09/12/9/974f184f0d35ad7f7cdd62ac5eeaff7f.jpg',
    'http://c1.zdb.io/files/recommend/2017/09/18/d/dac97d1c3608d05953bdd49369a37815.jpg',
    'http://c1.zdb.io/files/2017/09/16/1/1601b4d2b86364dfa6cca35f3185b63a_b.jpg',
    'http://c1.zdb.io/files/2017/09/15/d/d565214c89631c5a94d6b06a3ea0114d_b.jpg'];

let files1 = ['http://c1.zdb.io/files/recommend/2017/09/12/d/d06e4d89a2a77225f8460094f6d87b0b.jpg',
    'http://c1.zdb.io/files/2017/09/16/1/1601b4d2b86364dfa6cca35f3185b63a_b.jpg',
    'http://c1.zdb.io/files/2017/09/15/d/d565214c89631c5a94d6b06a3ea0114d_b.jpg'];

let files2 = ['http://c1.zdb.io/files/recommend/2017/09/12/d/d06e4d89a2a77225f8460094f6d87b0b.jpg',
    'http://c1.zdb.io/files/2017/09/15/d/d565214c89631c5a94d6b06a3ea0114d_b.jpg'];

let files3 = [
    'http://c1.zdb.io/files/2017/09/15/d/d565214c89631c5a94d6b06a3ea0114d_b.jpg'];

export default class Blogposts extends Component {


    renderImageIconView() {
        return (
            <Icon
                name="image"
                color="#fafafa"
                size={20}
            />
        );
    }


    _images = (info) => {

        if (info === 1)
            return files1;
        else if (info === 2)
            return files2;
        else if (info === 3)
            return files3;
        else
            return files
    };

    _renderItem = (info) => {
        return (
            <View style={styles.item}
            >
                <CardMedia
                    title={'[自驾】七天行走滇川藏'}
                    titleStyle={styles.title}
                    style={styles.card}
                    files={this._images(info)}
                    imageIconView={this.renderImageIconView}
                    imageCountStyle={{
                        fontSize: 18, fontWeight: 'bold', color: '#fafafa',
                        marginLeft: 5, marginBottom: 2
                    }}/>

                <View style={styles.info}>
                    <Text
                        numberOfLines={2}
                        style={styles.content}>国庆前打算重装拉练一波，于是一群无知少年少女（？？？）
                        跟随房先生去寻找他那魂牵梦绕多年的女神白卡莲。</Text>

                    <View style={[styles.alignRow, {margin: 8}]}>
                        <FastImage
                            style={styles.avatar}
                            source={{uri: 'http://c1.zdb.io/files/faces/7/1/7129d4238.jpg'}}
                        />

                        <Text style={styles.name}>博学审问慎思明辨笃行</Text>
                        <View style={{flex: 1}}/>

                        <Text style={styles.time}>3小时前</Text>

                    </View>
                </View>

            </View>
        )
    };

    render() {
        return (
            <UltimateListView
                displayDate
                arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
                refreshableMode={Platform.OS === 'ios' ? 'advanced' : 'basic'}
                onFetch={this.onFetch}
                item={this._renderItem}
                keyExtractor={(item, index) => `blog${index}`}
            />
        )
    }

    onFetch = (page, post, end) => {
        console.log(page)
        try {

            if (page === 1) {
                setTimeout(() => {
                    post([1, 2, 3, 4, 5, 6], 6)
                }, 1000)

            }

        } catch (e) {
            end();
        }
    }
}

const styles = StyleSheet.create({
    item: {
        marginLeft: 10,
        marginRight: 10,
        backgroundColor: 'white',
        marginTop: 10,
        borderRadius: 3
    },
    card: {
        height: 200
    },
    title: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold'
    },
    content: {
        fontSize: 14,
        color: Colors._444,
        margin: 8
    },
    info: {
        flex: 1
    },
    alignRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        height: 36,
        width: 36,
        borderRadius: 18
    },
    name: {
        marginLeft: 8,
        fontSize: 15,
        fontWeight: 'bold',
        color: Colors._444
    },
    time: {
        fontSize: 13,
        color: Colors._666
    }
});

