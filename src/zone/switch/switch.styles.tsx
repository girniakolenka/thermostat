import { PixelRatio, StyleSheet } from "react-native";

const width = PixelRatio.roundToNearestPixel(935);
const height = PixelRatio.roundToNearestPixel(285);

const iconWidth = PixelRatio.roundToNearestPixel(170);
const iconHeight = PixelRatio.roundToNearestPixel(70);

export default StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems: 'center'
    },
    animation: {
        width: 100,
        height: 100
    },
    imageBackground: {
        width: iconWidth,
        height: iconHeight,
        overflow: 'hidden'
    },
    imageStyles: {
        resizeMode: 'cover',
        width: width,
        height: height,
        left: -340
    }
});