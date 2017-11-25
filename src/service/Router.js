import {Actions} from 'react-native-router-flux';


export default class Router {

    push(props, route) {
        Actions.push(route.name, {params: route.params})

    }

    replace(route) {
        Actions.replace(route.name, {params: route.params})
    }


    pop() {
        Actions.pop();

    }

    toWebViewPage(url) {
        this.push({name: 'WebViewPage', params: {url: url}})
    }
}