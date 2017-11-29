import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar, {NavButton, NavButtonText, NavTitle} from './navbar';
import PropTypes from 'prop-types';

export default class NavTopBar extends Component {

    static propTypes = {
        title: PropTypes.string,
        leftPress: PropTypes.func
    };

    render() {
        return <NavBar>
            <NavButton
                style={{
                    flexDirection: 'row',
                    alignItems: 'center'
                }}
                onPress={this.props.leftPress || this.pop}>
                <Icon
                    name={'chevron-left'}
                    size={16}/>
                <NavButtonText>
                    {'返回'}
                </NavButtonText>
            </NavButton>

            <NavTitle>
                {this.props.title || '标题'}
            </NavTitle>

        </NavBar>
    }

    pop = () => {
        console.log('left')
        global.router.pop()
    }
}