import {Actions} from 'react-native-router-flux';


export default class Router {

    push(route) {
        Actions.push(route.name, {params: route.params})

    }

    replace(route) {
        Actions.replace(route.name, {params: route.params})
    }


    pop() {
        Actions.pop();

    }

    toQRScannerPage() {
        this.push({name: 'QRScannerPage'})
    };

    toWebViewPage(url) {
        this.push({name: 'WebViewPage', params: {url: url}})
    }
}