import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {QRScannerView} from '../../components/scanner';
import {showToash} from '../../utils/Utils';
import {NavTopBar} from '../../components';
import {Colors, Images} from '../../themes';

export default class QRScannerPage extends Component {


    render() {
        return < QRScannerView
            bottomMenuStyle={{height: 120, backgroundColor: '#000000', opacity: 1}}
            scanBarImage={Images.ic_scan_bar}
            cornerColor={Colors.yellow_FFD900}
            cornerOffsetSize={0}
            borderWidth={0}
            hintText={'请对准车牌上的二维码'}
            hintTextStyle={{color: Colors.yellow_FFD900, fontSize: 16, fontWeight: 'bold'}}
            hintTextPosition={110}
            maskColor={Colors.black_0000004D}
            onScanResultReceived={this.barcodeReceived}
            bottomMenuHeight={120}
            renderTopBarView={() => {
                return <View/>
            }}

            renderBottomMenuView={() => this._renderMenu()}
        />
    }

    _renderMenu() {
        return (
            <View style={Styles.view_menu_container}>
                <View style={Styles.view_menu_item_container}>

                    <Text
                        style={Styles.text_menu_title}
                    >手动输入车牌号</Text>
                </View>

                <View style={Styles.view_menu_item_container}>

                    <Text
                        style={Styles.text_menu_title}
                    >手电筒</Text>
                </View>
            </View>
        )
    }

    barcodeReceived = (e) => {
        showToash('Type: ' + e.type + '\nData: ' + e.data);
        //console.log(e)
    }
}


const Styles = StyleSheet.create({
    image_bottom_menu: {
        height: 50,
        width: 50,
        marginBottom: 10,
    },
    view_menu_container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingTop: 16
    },
    text_menu_title: {
        color: 'white',
        fontSize: 14
    },
    view_menu_item_container: {
        justifyContent: 'center',
        alignItems: 'center',
    }

})