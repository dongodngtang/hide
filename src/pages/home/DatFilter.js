import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Icon} from '../../components';
import {Colors} from '../../themes';

export default class DatFilter extends Component {

    render() {
        return <View style={styles.page}>
            <View style={styles.tab}>
                <Icon
                    size={16}
                    name={'calendar-check-o'}/>

                <Text style={styles.txt}>周末</Text>

            </View>
            <View style={styles.tab}>
                <Icon
                    size={16}
                    name={'globe'}/>

                <Text style={styles.txt}>深圳</Text>

            </View>
            <View style={styles.tab}>
                <Icon
                    size={16}
                    name={'filter'}/>

                <Text style={styles.txt}>徒步</Text>

            </View>
            <View style={styles.tab}>
                <Icon
                    size={16}
                    name={'user-plus'}/>

                <Text style={styles.txt}>好友参加</Text>

            </View>

        </View>
    }
}


const styles = StyleSheet.create({
    tab: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    page: {
        height: 50,
        flexDirection: 'row',
        backgroundColor: 'white',
        width: '100%',
        borderBottomColor: Colors._ECE,
        borderBottomWidth: 1
    },
    txt: {
        fontSize: 15,
        color: Colors._444,
        marginTop: 8
    }

})