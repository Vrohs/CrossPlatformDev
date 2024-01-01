import React from "react";
import {

    View,
    Text,
    SafeAreaView,
    StyleSheet,
    useColorScheme
} from "react-native";


const Styles = StyleSheet.create({
        
    container: {

        flex: 1
    },

    lightText: {
        
        color: "#ffffff"
    },

    darkText: {

        color: "#000000"
    }
})


function DynamicTheming(): JSX.Element{

    const newStyle = useColorScheme() === 'dark';

    return(
        <View style = {Styles.container}>

            <Text style = {newStyle ? Styles.lightText : Styles.darkText}> Happy New Year 🤩🤗  Welcome to 2024 ! </Text>
        </View>

    )

    

}

export default DynamicTheming;