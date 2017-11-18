import React, {PureComponent} from 'react';
import * as Screens from './screens';
import {StackNavigator} from 'react-navigation';
import {bootstrap} from './style/themeBootstrapper';
import {View, StyleSheet} from 'react-native';

bootstrap();

const ExplorerApp = StackNavigator({
    Home: {screen: Screens.ComponentsScreen},
    Button: {screen: Screens.ButtonScreen},
    Choice: {screen: Screens.ChoiceScreen},
    Tab: {screen: Screens.TabScreen},
    Card: {screen: Screens.CardScreen},
    Avatar: {screen: Screens.AvatarScreen},
    Input: {screen: Screens.InputScreen},
    Image: {screen: Screens.ImageScreen},
    Settings: {screen: Screens.SettingsScreen}
}, {
    navigationOptions: {
        headerStyle: {
            backgroundColor: 'white'
        }
    }
});
export default class App extends PureComponent  {
    render() {
        return ( <ExplorerApp/>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
