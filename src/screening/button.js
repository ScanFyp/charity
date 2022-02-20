import React from "react";
import {View ,Text , StyleSheet,Button,Alert,TouchableOpacity,Image} from "react-native";
const OurButton = () =>{
return(
<View>
    <Text style={styles.textStyle}>Buttons</Text>
    <Button 
    title=" JOIN NOW"
    onPress={()=>{
        Alert.alert("subscribe");
    }} />
      <TouchableOpacity 
    onPress={()=>{
       console.log("subscribe");
    }}> 
<Image style={styles.imageStyle} source={require("../../.expo/assets/jac2.jpg")}/>
        <Text> Join Now </Text>
        </TouchableOpacity>
</View>
);
};
const styles=StyleSheet.create({
    textStyle:{
        marginVertical:200,
        textAlign:"center",
        fontSize:30,
    },
    imageStyle:{
        width:300,
        height:300,
    },
});
export default OurButton;