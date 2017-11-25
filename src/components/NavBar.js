import React, {Component} from 'react';
import {View, Text, StyleSheet, Modal} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import NavBar, {NavButton, NavButtonText, NavTitle} from 'react-native-nav';
import PropTypes from 'prop-types';

export default class NavBar extends Component {

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
                onPress={this.props.leftPress || global.router.pop()}>
                <Icon
                    name={'chevron-left'}
                    size={16}/>
                <NavButtonText
                    style={styles.txtLocation}>
                    {'返回'}
                </NavButtonText>
            </NavButton>

            <NavTitle>
                {this.props.title || '标题'}
            </NavTitle>
        </NavBar>
    }
}