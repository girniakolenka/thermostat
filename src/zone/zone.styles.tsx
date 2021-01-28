import { StyleSheet } from "react-native";

export default StyleSheet.create({
    root: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        margin: 15
    },
    title: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontFamily: 'Chalkboard SE',
        fontSize: 18,
        marginRight: 15,
        alignSelf: 'flex-start',
        width: '75%'
    },
    titleContainer: {
        alignItems: 'flex-end',
        justifyContent: 'flex-end',
        flex: 2,
        flexDirection: 'row'
    }
});