import React from "react";
import Charity from "./src/screening/charity";
import Money from "./src/screening/money";
import Wear from "./src/screening/wear";
import Furniture from "./src/screening/furniture";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import chooseNgo from "./src/screening/chooseNgo";

const App = () => {
  const Stack = createNativeStackNavigator();
return(

   <NavigationContainer>
    <Stack.Navigator initialRouteName="charity"> 
<Stack.Screen name="charity" component={Charity} />
<Stack.Screen name="cash" component={Money}/>  
<Stack.Screen name="accessories" component={Wear}/> 
<Stack.Screen name="furniture" component={Furniture}/> 
<Stack.Screen name="choose" component={chooseNgo}/> 
</Stack.Navigator>
</NavigationContainer>

);
}

export default App;
