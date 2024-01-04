import React from "react";
import CardsLayout from "./components/CardsLayout";
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

        <>
        
        <CardsLayout />
       

          <SafeAreaView>

              <ScrollView>


              </ScrollView>
          </SafeAreaView>
        </>
    )
}



export default App_ui;