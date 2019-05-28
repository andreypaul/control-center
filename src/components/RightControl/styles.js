import { StyleSheet } from "react-native";
import { em } from "../../utils";

export const styles = StyleSheet.create({
    container: {
        marginHorizontal: em(10),
        borderRadius: em(20),
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0, 0.7)',
        overflow: 'hidden',
        position: 'absolute',
        zIndex: 2,
        alignItems: 'center',
    },
    iconsWrapper: {
        alignItems: 'center',
        flexDirection: 'row'
    },
    text: {
        color: '#FFF',
        fontSize: em(18),
        fontFamily: 'Helvetica-light'
    },
    player: {
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'center',
    },
    playerButton: {
        width: 23,
        height: 30,
        borderRadius:5
    }
});
