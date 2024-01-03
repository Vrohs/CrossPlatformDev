import React from "react";
import CardsLayout from "./components/cardsLayout";
import {

    View,
    Text,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    useColorScheme
} from "react-native";


function App_ui(): JSX.Element{

    return(
        
        <SafeAreaView>

        <ScrollView>
            
            <CardsLayout />
            <Text> Hello World! </Text>
        </ScrollView>
        </SafeAreaView>
    )
}



export default App_ui;