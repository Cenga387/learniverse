import React from 'react'
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View, ImageBackground, TextInput, Pressable } from 'react-native';

export default function LoginScreen  () {

  const navigation = useNavigation();

  handleLogin = () => {
    // Implement your login logic here, e.g., call an authentication API
    const { email, password } = this.state;

    // Example: Check if the email and password are valid
    if (email && password) {
      // Successfully logged in, navigate to the next screen
      this.props.navigation.navigate('MainStackNavigator', {screen: 'HomeScreen'});
    } else {
      // Handle login failure, show an error message
      alert('Invalid email or password. Please try again.');
    }
  }


  return (
    <View style={styles.container}>
      <ImageBackground source={require('../../assets/black-hole.jpg')} style={styles.background}>
        <View style={styles.container2}>
          <Text style={styles.title}>Universeum</Text>
          <Text style={styles.loginMessage}>Log into your account</Text>
          <TextInput style={styles.inputField}  placeholder="Username or email"></TextInput>
          <TextInput style={styles.inputField}  placeholder="Password" secureTextEntry></TextInput>
          <Pressable style={{alignSelf: 'flex-start', marginLeft: 30, color: 'white'}}>Forgot password?</Pressable>
          <Pressable style={styles.buttonLogin}>Login</Pressable>
          <Pressable style={styles.buttonRegister} onPress={() => navigation.navigate('Register')}>Create an Account</Pressable>
        </View>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center'
  },
  container2: {
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 50,
    backgroundColor: '#330762',
    width: '40%',
    borderRadius: 10
  },
  background: {
    width: '100%',
    height: '100%',
  },
  title:{
    padding: 10,
    fontSize: 55,
    color: 'white'
  },
  loginMessage:{
    padding: 10,
    fontSize: 18,
    color: 'white'
  },
  inputField:{
    backgroundColor: "#330762",
    padding: 20,
    height: 50,
    marginVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    textAlign: "center",
    color: "white",
    fontSize: 24,
    opacity: 0.8, 
    width: '90%'
  },
  buttonLogin: {
    width: '90%', 
    height: 70, 
    fontSize: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
    borderRadius: 10,
    color: 'white',
    backgroundColor: '#1F0639',
    fontFamily: 'calibri',
  },
  buttonRegister: {
    width: '90%', 
    height: 50, 
    borderColor: 'white', 
    fontSize: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 40,
    borderRadius: 10,
    color: 'white',
    fontFamily: 'calibri',

  }
})