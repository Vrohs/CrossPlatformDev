import React from "react";
import {

    View,
    Text,
    StyleSheet,
    useColorScheme, 
    SafeAreaView
} from "react-native";


function newApp(): JSX.Element{

    const isDarkMode = useColorScheme() === "dark";

    return (

            
            <View style = {Styles.container}>

                <Text style = { isDarkMode ? Styles.lightText : Styles.darkText }> Hello World! </Text>
            </View> 
    
    )
}

const Styles = StyleSheet.create({
    
    container: {

        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },

    lightText: {

        color: "#ffffff"
    },

    darkText: {

        color: "#000000"
    }
})



export default newApp;