import { Dimensions } from 'react-native';
const { width, height } = Dimensions.get('window');

//Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 350;
const guidelineBaseHeight = 680;

const scale = size => width / guidelineBaseWidth * size;
const scaleVertical = size => height / guidelineBaseHeight * size;
const scaleModerate = (size, factor = 0.5) => size + ( scale(size) - size ) * factor;

export {scale, scaleVertical, scaleModerate};
export const Values = {
    primary: '#397edc',
    primaryActive: '#2d63ad',
    success: '#22c93d',
    successActive: '#1dab35',
    info: '#19bfe5',
    infoActive: '#17adcf',
    warning: '#feb401',
    warningActive: '#eba502',
    danger: '#ed1c4d',
    dangerActive: '#c2173f',
    foreground: '#000000dd',
    background: '#fff',
    inverseBackground:'#000000',
    overlay: '#00000057',
    fontSize: 15,
    neutral: '#0000001A',
    hint: '#0000008e',
    highlight: '#ececec'
};