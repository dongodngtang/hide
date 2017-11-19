import React, {Component} from 'react';
import {View, Text} from 'react-native';

export default class Container extends Component {


    render() {
        return <View style={{flex:1,backgroundColor:'#ececec'}}>
            {this._renderChildren()}


        </View>
    }


    _renderChildren() {
        return React.Children.map(this.props.children, (child) => {
            return child
        })
    }
}