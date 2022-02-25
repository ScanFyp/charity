import React from "react";
import {View} from "react-native";
import FirstChallenge from "./src/screening/myChallenge";
import FlatListDemo from "./src/screening/flatlist";
import ImagesFile from "./src/screening/images";
import OurButton from "./src/screening/button";
import CounterNumber from "./src/screening/CounterNumber";
import ColorGenerator from "./src/screening/ColorGenerator";
import HookEffect from "./src/screening/HookEffect";
import Login from "./src/screening/login";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const App = () => {
    const Stack = createNativeStackNavigator();
return(
<NavigationContainer>
    <Stack.Navigator initialRouteName="loginpage"> 
<Stack.Screen name="loginpage" component={Login} />
<Stack.Screen name="color" component={ColorGenerator}/>  
</Stack.Navigator>
</NavigationContainer>
);
}

export default App;
