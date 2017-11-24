import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {UltimateListView} from '../../components';
import {Colors} from '../../themes';

export default class DatingPage extends Component {


    render() {
        return <UltimateListView
            keyExtractor={(item, index) => `${index}list`}
            displayDate
            arrowImageStyle={{width: 20, height: 20, resizeMode: 'contain'}}
            refreshableMode="advanced"
            onFetch={this.onFetch}
            separator={() => <View style={{
                height: 1,
                backgroundColor: Colors._ECE, width: '100%'
            }}/>}
            item={this.renderItem}
        />
    }

    renderItem = (item, index) => {
        return <View style={{height: 100, width: '100%', backgroundColor: 'white'}}>
            <Text>{item}</Text>
        </View>

    };

    onFetch = (page, post, end) => {
        try {
            if (page === 1) {
                post([1, 2, 3, 4, 5, 6], 6)
            }

        } catch (e) {
            end();
        }
    }
}