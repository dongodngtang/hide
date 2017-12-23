import React, {Component} from 'react'
import {
    StyleSheet,
    WebView,
    View,
    TouchableHighlight,
    Text
} from 'react-native';

export default class Sample extends Component {
    constructor(props) {
        super(props);
        this.state = {
            webViewData: ''
        };
        this.data = 0;
        this.sendMessage = this.sendMessage.bind(this);
        this.handleMessage = this.handleMessage.bind(this);
    }

    sendMessage() {
        this.webview.postMessage(++this.data);
    }

    handleMessage(e) {
        this.setState({webViewData: e.nativeEvent.data});
    }

    injectJS = () => {
        const script = 'document.write("Injected JS ")';  // eslint-disable-line quotes
        if (this.webview) {
            this.webview.injectJavaScript(script);
        }
    }


    render() {

        let webNative = 'http://192.168.2.173:3000';
        let weui = 'https://weui.github.io/react-weui/';

        return <View style={styles.container}>
            <TouchableHighlight
                style={styles.button}
                onPress={this.sendMessage}
            >
                <Text>发送数据到WebView</Text>
            </TouchableHighlight>

            <TouchableHighlight
                style={styles.button}
                onPress={this.injectJS}
            >
                <Text>注入WebView</Text>
            </TouchableHighlight>
            <View>
                <Text>来自WebView的数据: <Text>{this.state.webViewData}</Text></Text>
            </View>
            <WebView

                startInLoadingState={true}
                style={styles.webview}
                source={{uri: weui, headers: {sample: 'alksjdlfkj'}}}
                ref={webview => this.webview = webview}
                onMessage={this.handleMessage}
                onNavigationStateChange={navigation => {
                    console.log('onNavigationStateChange', navigation)
                }}
                onError={e => {
                    console.log('onError', e)
                }}
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
        paddingTop: 40
    },
    button: {
        width: 150,
        height: 40,
        backgroundColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
    },
    webview: {
        height: 400,
        width: 300
    }
});