import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {RkText, RkTextInput} from 'react-native-ui-kitten';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class TopNavMain extends Component{
    render(){
        return <View>
            <RkTextInput rkType='rounded' label={<Icon style={[styles.inputIcon, styles.searchIcon]} name='search'/>}
                         placeholder='Search' style={{marginLeft: 11}}/>
        </View>
    }
}

const styles = StyleSheet.create({
    inputIcon: {
        fontSize: 15,
        color: '#0000003a',
        marginLeft: 4,
    },
    searchIcon: {
        marginLeft: 16,
    }
});