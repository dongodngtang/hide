import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {UltimateListView, FastImage, Icon} from '../../components';
import {Colors} from '../../themes';

export default class DatingPage extends Component {


    render() {
        return <UltimateListView
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
    }

    renderItem = (item, index) => {
        return <View style={styles.itemView}>


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
                        name={'calendar-check-o'}
                        size={14}/>

                    <Text
                        numberOfLines={1}
                        style={styles.txtAdr}>2017.11.25 09:30</Text>

                </View>

                <View style={[styles.alignRow, {marginTop: 8}]}>
                    <Text style={styles.txtJoin}>12/16</Text>


                </View>


            </View>

            <FastImage
                source={{uri: 'http://c1.zdb.io/files/2017/11/14/6/6260053aa0b7e217eb78209e8f680771.jpg'}}
                style={styles.avatar}>
            </FastImage>
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

const styles = StyleSheet.create({
    itemView: {
        height: 140,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 8
    },
    imgAction: {
        height: 110,
        width: 180
    },
    txtTitle: {
        fontSize: 14
    },
    info: {flex: 1, height: 110, paddingLeft: 10, paddingRight: 5},
    alignRow: {
        flexDirection: 'row',
        alignItems: 'flex-end'
    },
    txtAdr: {
        fontSize: 13,
        color: Colors._label,
    },
    txtTag: {
        fontSize: 12,
        color: Colors._title,
        backgroundColor: Colors._ECE,
        borderRadius: 3,
        padding: 3
    },
    txtJoin: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Colors._tag,
        fontSize: 13,
        color: Colors._tag,
        backgroundColor: Colors._F4E,
        padding: 3
    },
    avatar: {
        height: 34,
        width: 34,
        borderRadius: 17,
        backgroundColor: Colors._ECE,
        position: 'absolute',
        bottom: 5,
        right: 10
    }


});