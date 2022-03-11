import React, {useState} from 'react';
import { View, Text,StyleSheet,TouchableOpacity,TextInput, Picker } 
from 'react-native';
 const chooseNgo = ({navigation}) => {
  const [pickerValue,setPickerValue]=useState("SAF");
  const [productName,setProductName]=useState("");
     const submit = () => {
      alert(`Product is ${productName}`);
        navigation.navigate("info");
      }
  return (
    <View style={styles.mainContainer}>
       < View style={styles.inputContainer}>
<Text style={styles.labels}>Product Name</Text>
 <TextInput  style={styles.inputStyle}
value={productName}
onChangeText={(Data)=> setProductName(Data)}
/>
</View >
          <Text style={styles.welcome}>
         Select Your NGO
        </Text>
        <Picker style={styles.pickerStyle} selectedValue={pickerValue}
      onValueChange={(itemValue) => setPickerValue(itemValue)}  
        >
<Picker.item label="Shahid Afridi Foundation" value="SAF"/>
<Picker.item label="Dar-ul-Sakoon" value="DUS"/>
<Picker.item label="Aman Foundation" value="AF"/>
<Picker.item label="Bilqees Sarwar Foundation" value="BSF"/>
<Picker.item label="Agha Khan Foundation" value="AKF"/>
        </Picker>
        <TouchableOpacity style={styles.buttonStyle} 
    onPress={() => submit()} >
    <Text style={styles.buttonText}>
        SUBMIT
      </Text>
   
    </TouchableOpacity>
    </View>
  )
}
const styles=StyleSheet.create({
mainContainer:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center',
},
buttonStyle:{
    backgroundColor:"green"  ,
    paddingHorizontal:50,
    paddingVertical:15,
    fontSize:35,
  },
pickerStyle:{
width:300,
height:45,
borderColor:"black",
borderWidth:3,
backgroundColor:"grey",
},
welcome:{
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
    color:"#7d7d7d",
},
inputStyle:{
    borderWidth:1,
    borderColor:"rgba(0,0,0,0.3)",
    paddingHorizontal:15,
    paddingVertical:7,
    borderRadius:1,
   
    fontSize:18,
    marginBottom:10,
},
labels:{
    fontSize:18,
    color:"#7d7d7d",
    marginTop:10,
    marginBottom:5,
    lineHeight:25,
    
   },
inputContainer:{
    marginTop:20,
},
buttonText:{
    fontSize:30,
    margin:200,
    textAlign:"center",
},

})
export default chooseNgo;
