import React, {Component} from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import {
    StyleSheet,
    ListView,
    View,
    TouchableOpacity,
    FlatList
} from 'react-native';

import {RkText, RkTheme, RkStyleSheet} from 'react-native-ui-kitten';


export class ComponentsScreen extends Component {
    static navigationOptions = {
        title: 'UI KIT'
    };


    constructor(props) {
        super(props);
        this.data = [
            {
                title: 'Buttons',
                route: 'Button',
            },
            {
                title: 'Selectable Components',
                route: 'Choice'
            },
            {
                title: 'Inputs',
                route: 'Input'
            },
            {
                title: 'Cards',
                route: 'Card'
            },
            {
                title: 'Image Viewer',
                route: 'Image'
            },
            {
                title: 'Tab View',
                route: 'Tab'
            },
            {
                title: 'Custom Control View',
                route: 'Avatar'
            }
        ];
        let ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });
        this.state = {
            dataSource: ds.cloneWithRows(this.data),
            theme: _.cloneDeep(RkTheme.current)
        };
    }


    renderComponent = (componentDefinition) => {

        const {item} = componentDefinition;

        return (
            <TouchableOpacity
                onPress={() => this.selectComponent(item)}
            >
                <View style={styles.componentRow}>
                    <RkText rkType='bold'>{item.title}</RkText>
                </View>
            </TouchableOpacity>
        );
    }

    selectComponent = (componentDefinition) => {

        const {navigate} = this.props.navigation;
        navigate(componentDefinition.route);
    };

    renderSeparator(sectionID,
                    rowID,
                    adjacentRowHighlighted) {
        var style = styles.rowSeparator;
        if (adjacentRowHighlighted) {
            style = [style, styles.rowSeparatorHide];
        }
        return (
            <View key={'SEP_' + sectionID + '_' + rowID} style={style}/>
        );
    }

    renderListView = () => {
        return <ListView
            dataSource={this.state.dataSource}
            renderRow={(...params) => this.renderComponent(...params)}
            renderSeparator={this.renderSeparator}
            automaticallyAdjustContentInsets={true}
            keyboardDismissMode="on-drag"
            keyboardShouldPersistTaps='always'
            showsVerticalScrollIndicator={false}
        />
    };

    state = {selected: (new Map(): Map<string, boolean>)};

    render() {
        console.log(this)
        return (
            <View style={styles.container}>
                <FlatList
                    data={this.data}
                    keyExtractor={(item, index) => `list${index}`}
                    renderItem={this.renderComponent}
                />

            </View>

        );
    }
}

const styles = RkStyleSheet.create(theme => ({
    container: {
        flex: 1,
        backgroundColor: theme.colors.screen.base
    },
    componentRow: {
        paddingHorizontal: 24,
        paddingVertical: 18,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    rowSeparator: {
        backgroundColor: 'rgba(0, 0, 0, 0.1)',
        height: 1,
    },
    rowSeparatorHide: {
        opacity: 0.0,
    },
}));
