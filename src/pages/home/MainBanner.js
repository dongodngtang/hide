import React, {Component} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Swiper, FastImage} from '../../components';

export default class MainBanner extends Component {

    render() {
        let banners = [{image: 'http://c1.zdb.io/files/recommend/2017/11/14/8/8a3a8d579b18c673bc2c638a75d539c0.jpg'},
            {image: 'http://c1.zdb.io/files/recommend/2017/11/14/7/7806954e209870c22b837b03a2c6d737.jpg'},
            {image: 'http://c1.zdb.io/files/recommend/2017/10/31/2/2075778187024f9b64dd3c4b499b8b7f.jpg'}];
        if (banners.length > 0)
            return (
                <View style={{height: 200}}>
                    <Swiper
                        autoplayTimeout={3}
                        autoplay>
                        {banners.map((item, key) => {
                            return <View
                                key={`banner${key}`}>
                                <FastImage style={{height: 200, width: '100%'}}
                                           source={{uri: item.image}}/>
                            </View>

                        })}

                    </Swiper>
                </View>


            );
        else
            return <View style={{height: 200}}/>
    }
}