import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {UltimateListView, FastImage, Icon} from '../../components';
import {Colors} from '../../themes';
import MainBanner from './MainBanner';
import DatFilter from './DatFilter';
import _ from 'lodash';

export default class DatingPage extends Component {

    state = {
        showFilter: false
    }


    render() {
        let that = this;
        return <View>
            <UltimateListView
                header={() => this.renderHeader()}
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
                onViewableItemsChanged={(info) => {

                    const {changed} = info;

                    changed.forEach(item => {
                        if (item.key === '0list') {
                            console.log(item);

                        }
                    })
                }
                }
            />
            {this.state.showFilter ? <View style={styles.filterTop}>
                <DatFilter/>
            </View> : null}

        </View>
    }

    showBar = (isViewable) => {
        console.log('isViewable:' + isViewable)

    }

    renderHeader = () => {
        return <View>
            <MainBanner/>
            <DatFilter/>
        </View>
    };

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
                        name={'calendar-o'}
                        size={14}/>

                    <Text
                        numberOfLines={1}
                        style={styles.txtAdr}>2017.11.25 09:30</Text>

                </View>

                <View style={[styles.alignRow, {marginTop: 8}]}>
                    <Text style={styles.txtTag}>#徒步</Text>
                    <Text style={styles.txtTag}>#山野</Text>

                    <View style={{flex: 1}}/>
                    <Text style={styles.txtJoin}>报名中</Text>
                </View>


            </View>


        </View>

    };

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
    itemView: {
        height: 130,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        paddingLeft: 10,
        paddingRight: 10,
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
        color: 'green',
        marginRight: 10
    },
    txtJoin: {
        borderRadius: 3,
        borderWidth: 1,
        borderColor: Colors._tag,
        fontSize: 11,
        color: Colors._tag,
        backgroundColor: Colors._F4E,
        padding: 3,
    },
    avatar: {
        height: 30,
        width: 30,
        borderRadius: 15,
        backgroundColor: Colors._ECE,
        position: 'absolute',
        bottom: 5,
        right: 10
    },
    tag: {
        position: 'absolute',
        bottom: 3,
        left: 10,
        flexDirection: 'row'
    },
    filterTop: {
        position: 'absolute',
        top: 0,
        height: 50,
        width: '100%'
    }


});