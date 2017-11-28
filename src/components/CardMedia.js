import React, {
    Component,
} from 'react';
import PropTypes from 'prop-types';

import {
    Image,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View,
} from 'react-native';
import {FastImage} from './index';

export default class CardMedia extends Component {

    static propTypes = {
        style: PropTypes.any,
        files: PropTypes.array,
        title: PropTypes.string,
        titleStyle: PropTypes.any,
        onPress: PropTypes.func,
        imageIconView: PropTypes.func,
        imageCountStyle: PropTypes.any,
        titleTouchable: PropTypes.bool,
        imageTouchable: PropTypes.bool,
    };

    static defaultProps = {
        style: {},
        files: [],
        title: '',
        titleTouchable: true,
        imageTouchable: true,
    };

    render() {
        const {
            style,
            title,
            titleStyle,
            files,
            onPress,
            imageIconView,
            imageCountStyle,
            titleTouchable,
            imageTouchable,
        } = this.props;

        return (
            <View style={[styles.cardMedia, style]}>
                {files.length === 1 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
                    <View style={[styles.cardMediaImages, style, {flexDirection: 'row'}]}>
                        <FastImage
                            source={{uri: `${files[0]}`}}
                            style={{flex: 1}}
                        />
                    </View>
                </TouchableWithoutFeedback>
                }
                {files.length === 2 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
                    <View style={[styles.cardMediaImages, style, {flexDirection: 'row'}]}>
                        <FastImage
                            source={{uri: `${files[0]}`}}
                            style={{flex: 1}}
                        />
                        <FastImage
                            source={{uri: `${files[1]}`}}
                            style={{flex: 1}}
                        />
                    </View>
                </TouchableWithoutFeedback>
                }
                {files.length === 3 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
                    <View style={[styles.cardMediaImages, style, {flexDirection: 'row'}]}>
                        <FastImage
                            source={{uri: `${files[0]}`}}
                            style={{flex: 2}}
                        />
                        <View style={[style, {flex: 1, flexDirection: 'column'}]}>
                            <FastImage
                                source={{uri: `${files[1]}`}}
                                style={{flex: 1}}
                            />
                            <FastImage
                                source={{uri: `${files[2]}`}}
                                style={{flex: 1}}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                }
                {files.length >= 4 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!imageTouchable}>
                    <View style={[styles.cardMediaImages, style, {flexDirection: 'column'}]}>
                        <View style={[style, {flex: 1, flexDirection: 'row'}]}>
                            <FastImage
                                source={{uri: `${files[0]}`}}
                                style={{flex: 1}}
                            />
                            <FastImage
                                source={{uri: `${files[1]}`}}
                                style={{flex: 1}}
                            />
                        </View>
                        <View style={[style, {flex: 1, flexDirection: 'row'}]}>
                            <FastImage
                                source={{uri: `${files[2]}`}}
                                style={{flex: 1}}
                            />
                            <FastImage
                                source={{uri: `${files[3]}`}}
                                style={{flex: 1}}
                            />
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                }
                {files.length <= 4 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!titleTouchable}>
                    <View style={styles.overlay}>
                        <Text
                            style={titleStyle}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                        >
                            {title}
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
                }
                {files.length > 4 &&
                <TouchableWithoutFeedback onPress={onPress} disabled={!titleTouchable}>
                    <View style={[styles.overlay, {flex: 1, flexDirection: 'row', justifyContent: 'space-between'}]}>
                        <Text
                            style={[titleStyle, {flex: 1}]}
                            numberOfLines={1}
                            ellipsizeMode={'tail'}
                        >
                            {title}
                        </Text>
                        <View style={{flexDirection: 'row'}}>
                            {imageIconView && imageIconView()}
                            <Text
                                style={[imageCountStyle, styles.imageCount]}
                            >
                                {files.length}
                            </Text>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    cardMedia: {
        position: 'relative',
    },
    cardMediaImages: {
        position: 'absolute',
        left: -16,
        right: -16,
    },
    overlay: {
        position: 'absolute',
        left: -16,
        right: -16,
        bottom: 0,
        paddingTop: 24,
        paddingBottom: 16,
        paddingLeft: 16,
        paddingRight: 16,
        backgroundColor: 'rgba(0,0,0,.35)',
    },
    ovaerlayMoreImages: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,.35)',
    },
    imageCount: {
        top: 4,
    },
});