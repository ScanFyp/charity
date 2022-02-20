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
const App = () => {
return(
<View>
    <FirstChallenge />
    <FlatListDemo />
    <ImagesFile />
   <OurButton /> 
   <CounterNumber />
   <ColorGenerator />
   <HookEffect/>
   < Login/>
</View>
);
}

export default App;
