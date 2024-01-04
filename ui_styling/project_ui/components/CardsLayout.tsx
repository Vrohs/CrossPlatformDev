import React from "react";
import {

    View,
    Text,
    SafeAreaView,
    StyleSheet
} from "react-native";



function Layout(){

    return(

      
            <View style = {styles.container}>

                <Text style={styles.headingText}>Cards Layout</Text>
            </View>
    )
}



const styles = StyleSheet.create({

    container: {

        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },

    headingText: {

        fontSize: 45,
        fontWeight: "bold"
    }
})


export default Layout;
