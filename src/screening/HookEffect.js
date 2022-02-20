import React, { useEffect, useState } from "react";
import {View, Text,StyleSheet, ActivityIndicator ,FlatList} from "react-native";

const HookEffect = () => {
const [myUserData,setMyUserData] = useState(); //usestate use kiya hai take api se data ko fetch krwa skein
const [isLoaded,setIsLoaded] = useState(true); //for adding loading effect before any data is displayed in front of user
  const  getUserData = async () => {
try { //for error handling if the data is fetched frm API or not
 const response=  await fetch("https://thapatechnical.github.io/userapi/users.json");
 const myData= await response.json(); //to convert response into json formate
 setMyUserData(myData); //iska mtlb k jo data fetch howa hai usko state variable me show krana hai
setIsLoaded(false);//k agr data mil gya hai to load krane ki zrort nhi hai
 console.log(myData); 
}
 catch (error) {
    console.log(error);
}
  };
    useEffect(() => {
      getUserData();
    },[]);
    return( 
  <View>
         {isLoaded ? (<View><ActivityIndicator/></View>) //agr data nhi howa to load waly ko yhan implement krna hai
            : (
                <View>
<FlatList data={myUserData} //take sara data array se fwtch hosky
renderItem ={({item}) =>{
    return( <View>
<Text>{item.name}</Text>
<Text>{item.id < 10 ? `#0${item.id}`:`#${item.id}`}</Text> 
<Text>{item.email}</Text>
<Text>{item.mobile}</Text>
   </View>
    );
          }}
/>
</View>
            )
            }
    </View>
    );
};

const styles = StyleSheet.create({

});
export default HookEffect;