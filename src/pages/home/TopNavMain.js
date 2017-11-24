import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {RkText, RkTextInput} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar, {NavButton, NavButtonText, NavTitle} from 'react-native-nav';

export default class TopNavMain extends Component {
    render() {
        return <NavBar>
            <NavButton
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={() => alert('hi')}>
                <NavButtonText
                    style={styles.txtLocation}>
                    {"深圳"}
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

                onPress={() => alert('hi')}>
                <Icon
                    style={{marginLeft: 10}}
                    color={'green'}
                    name={'qrcode'}
                    size={20}/>
            </NavButton>
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