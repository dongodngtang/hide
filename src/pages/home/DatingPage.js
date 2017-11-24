import React, {Component} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {UltimateListView, FastImage} from '../../components';
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
                source={{uri: 'http://c1.zdb.io/files/recommend/2017/11/13/c/c20da9ee2cb8484b7888f23fc9ce0c95.jpg'}}
            />
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
        height: 150,
        width: '100%',
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems: 'center'
    },
    imgAction: {
        height: 130,
        width: 200
    }

});