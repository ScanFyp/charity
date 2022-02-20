import { Text, StyleSheet, View ,TextInput} from 'react-native';
import React from 'react';

const Login = () => {
    return (
      <View>
        <Text>LOGIN FORM</Text>
        <Text>You can reach us at anytime via any@thapa.com</Text>
        <View>
            <Text>Enter Your Name</Text>
            <TextInput />
        </View>
      </View>
    );
  };

const styles = StyleSheet.create({

});
export default Login;