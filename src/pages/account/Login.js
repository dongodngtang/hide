/**
 * Created by lorne on 2017/12/23
 * Function:
 * Desc:
 */
import React, {PureComponent} from 'react';
import {
    View,
    Image,
    Keyboard
} from 'react-native';
import {
    RkButton,
    RkText,
    RkTextInput,
    RkAvoidKeyboard, RkStyleSheet
} from 'react-native-ui-kitten';

export default class Login extends PureComponent {


    render() {
        let renderIcon = () => {
            return <Image style={styles.image} source={require('../../assets/logo.png')}/>;

        };

        return (
            <RkAvoidKeyboard
                style={styles.screen}
                onStartShouldSetResponder={(e) => true}
                onResponderRelease={(e) => Keyboard.dismiss()}>
                <View style={styles.header}>
                    {renderIcon()}
                    <RkText style={styles.txtLogo}>易 行</RkText>

                </View>
                <View style={styles.content}>
                    <View>
                        <RkTextInput rkType='rounded' placeholder='Username'/>
                        <RkTextInput rkType='rounded' placeholder='Password' secureTextEntry={true}/>
                        <RkButton style={styles.btnLogin}>
                            登录
                        </RkButton>
                    </View>


                    <View style={styles.footer}>
                        <View style={styles.textRow}>
                            <RkText rkType='primary3'>Don’t have an account?</RkText>
                            <RkButton rkType='clear' onPress={() => this.props.navigation.navigate('SignUp')}>
                                <RkText rkType='header6'> Sign up now </RkText>
                            </RkButton>
                        </View>
                    </View>
                </View>
            </RkAvoidKeyboard>
        )
    }
}

let styles = RkStyleSheet.create(theme => ({
    screen: {
        flex: 1,
        backgroundColor: theme.colors.screen.base
    },
    image: {
        height: 77,
        resizeMode: 'contain'
    },
    header: {
        marginTop: 60,
        alignItems: 'center',
        justifyContent: 'center'
    },
    content: {
        padding: 17,
        flex: 1
    },
    save: {
        marginVertical: 20
    },
    textRow: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        borderColor: theme.colors.border.solid
    },
    footer: {
        marginTop: 20,
    },
    btnLogin: {
        height: 50,
        width: '100%',
        borderRadius: 25,
        marginTop: 20

    },
    txtLogo: {
        fontSize: 18,
        fontWeight: 'bold'
    }
}));