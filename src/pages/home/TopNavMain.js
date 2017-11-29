import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import {RkText, RkTextInput} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar, {NavButton, NavButtonText, NavTitle} from 'react-native-nav';
import cityData from '../../utils/1488442890071.json';
import CityListView from '../../components/cityPicker/cityList';

export default class TopNavMain extends Component {

    constructor() {
        super();
        this.state = {
            currentCity: '',
            showCityListView: false
        };

        let citys = {};
        let chars = [];
        cityData.map(char => {
            chars = [...chars, char.char];
            citys[char.char] = char.citys.map(city => {
                return {
                    ...city,
                    pinyin: city.pinyin.join('')
                }
            });
        });
        this.chars = chars;
        this.citys = citys;
    }

    choosedCityHandler = (city) => {
        console.log(city);
        this.setState({
            showCityListView: false,
            currentCity: city.area_name
        });
    }

    gobackHandler = () => {
        this.setState({
            showCityListView: false
        });
    }

    onPressButtonHandler = () => {
        this.setState({
            showCityListView: true
        });
    }

    render() {

        const {currentCity, showCityListView} = this.state;
        this.CityListView = this.CityListView || <CityListView
            citys={this.citys}
            chars={this.chars}
            gobackHandler={this.gobackHandler}
            choosedCity={this.choosedCityHandler}
        />;

        return <NavBar>
            <NavButton
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={this.onPressButtonHandler}>
                <NavButtonText
                    style={styles.txtLocation}>
                    {currentCity || '选择城市'}
                </NavButtonText>
                <Icon style={{
                    marginLeft: 4
                }}
                      name={'angle-down'}
                      size={16}/>
            </NavButton>
            <RkTextInput rkType='rounded'
                         label={<Icon style={[styles.inputIcon, styles.searchIcon]} name='search'/>}
                         placeholder='Search' style={styles.searchColumn}/>
            <NavButton
                onPress={() => global.router.toQRScannerPage()}>
                <Icon
                    style={{marginLeft: 10}}
                    color={'green'}
                    name={'qrcode'}
                    size={20}/>
            </NavButton>

            <Modal
                visible={this.state.showCityListView}
                animationType='slide'
                onRequestClose={() => {
                    alert("Modal has been closed.")
                }}
            >
                {this.CityListView}
            </Modal>
        </NavBar>
    }
}

const styles = StyleSheet.create({
    inputIcon: {
        fontSize: 15,
        color: '#0000003a',
        marginLeft: 4,
    },
    searchIcon: {
        marginLeft: 10,
    },
    bar: {
        height: 44,
        width: '100%',
        backgroundColor: 'red'
    },
    searchColumn: {
        marginLeft: 11,
        height: 30,
        width: '70%'
    },
    txtLocation: {
        fontSize: 14
    }

});