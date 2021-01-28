import { PixelRatio, StyleSheet } from "react-native";

const iconWidth = PixelRatio.roundToNearestPixel(100);
const iconHeight = PixelRatio.roundToNearestPixel(100);

export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'flex-end'
    },
    switch: {
        alignItems: 'flex-end',
        marginRight: 15
    },
    animation: {
        width: iconWidth,
        height: iconHeight
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
        height: iconHeight
    }
});