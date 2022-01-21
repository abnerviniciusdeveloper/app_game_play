import { StyleSheet } from "react-native";
import { theme } from "../../global/style/theme";

export const style = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    image: {
        width: '100%',
        height: 360,
    },
    content: {
        marginTop: -80,
        paddingHorizontal: 50
    },
    title: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 30,
        marginBottom: 10,
        fontFamily: theme.fonts.title700
    },
    subtitle: {
        color: theme.colors.heading,
        textAlign: 'center',
        fontSize: 15,
        marginBottom: 12,
        fontFamily: theme.fonts.title500
    }

})