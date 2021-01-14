import { PixelRatio, StyleSheet } from "react-native";

const width = PixelRatio.roundToNearestPixel(935);
const height = PixelRatio.roundToNearestPixel(285);

const iconWidth = PixelRatio.roundToNearestPixel(170);
const iconHeight = PixelRatio.roundToNearestPixel(70);

export default StyleSheet.create({
    root: {
        flexDirection:'row',
        alignItems: 'flex-start',
        flex: 1
    },
    animation: {
        width: iconWidth,
        height: 100
    },
    loading: {
        width: iconWidth,
        height: iconHeight,
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems: 'center'
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