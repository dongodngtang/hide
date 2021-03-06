import React, {Component} from 'react';
import {View, Text, StyleSheet, Platform} from 'react-native';
import {UltimateListView, FastImage, Icon} from '../../components';
import {Colors} from '../../themes';

export default class ActivityPage extends Component {

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

        return <View style={{
            paddingLeft: 10,
            backgroundColor: 'white',
            paddingRight: 10
        }}>

            <View style={styles.itemView}>
                <FastImage
                    style={styles.imgAction}
                    resizeMode={FastImage.resizeMode.cover}
                    source={{uri: 'http://c1.zdb.io/files/recommend/2017/10/31/2/2075778187024f9b64dd3c4b499b8b7f.jpg'}}
                />

                <View style={styles.info}>
                    <Text
                        numberOfLines={2}
                        style={styles.txtTitle}>2017第五届磨房梅州百里徒步活动</Text>
                    <View style={[styles.alignRow, {marginTop: 8}]}>
                        <Icon
                            color={Colors._label}
                            style={{marginRight: 5}}
                            name={'map-marker'}
                            size={16}/>

                        <Text
                            numberOfLines={1}
                            style={styles.txtAdr}>江西武功山精华段-金顶-发云界穿越</Text>

                    </View>

                    <View style={[styles.alignRow, {marginTop: 5}]}>
                        <Icon
                            color={Colors._label}
                            style={{marginRight: 5}}
                            name={'calendar-o'}
                            size={14}/>

                        <Text
                            numberOfLines={1}
                            style={styles.txtAdr}>2017.11.25 09:30</Text>

                    </View>


                    <View style={[styles.alignRow, {marginTop: 5}]}>
                        <Text style={styles.price}>¥99</Text>
                        <View style={{flex: 1}}/>

                        <Text style={styles.txtJoin}>130人已报名</Text>
                    </View>

                </View>
            </View>

        </View>

    }
}

const styles = StyleSheet.create({
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15
    },
    alignRow: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 14,
        color: Colors._444,
        marginLeft: 10
    },
    txtNum: {
        fontSize: 14,
        color: Colors._666,
    },
    itemView: {
        height: 130,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgAction: {
        height: 110,
        width: 180
    },
    txtTitle: {
        fontSize: 14
    },
    info: {flex: 1, height: 110, paddingLeft: 10, paddingRight: 5},

    txtAdr: {
        fontSize: 13,
        color: Colors._label,
    },
    price: {
        fontSize: 15,
        color: Colors._tag
    },
    txtJoin: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Colors._tag,
        fontSize: 11,
        color: Colors._tag,
        backgroundColor: Colors._F4E,
        padding: 3
    },
});