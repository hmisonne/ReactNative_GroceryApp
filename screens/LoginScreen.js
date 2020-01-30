import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import Constants from 'expo-constants';
import Expo from "expo";
import * as Google from "expo-google-app-auth";
export default class LoginScreen extends React.Component {


signIn = async () => {
    try {
      const result = await Google.logInAsync({
        androidClientId: '1012947899839-c3fe21gjtrfb0006aqtfb21pq736ksj6.apps.googleusercontent.com',
        iosClientId:'',
        scopes: ["profile", "email"]
      })
      if (result.type === "success") {
        this.props.navigation.navigate('Main',{name: result.user.name})
        // console.log(result.user)
      } else {
        console.log("cancelled")
      }
    } catch (e) {
          console.log("error", e)
        }
    }




  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.paragraph}>Login to build your Grocery List</Text>
        <Button title="Sign in with Google" 
          onPress={() => this.signIn()} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  button: {
    marginVertical: 10,
    margin: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'black',
    minWidth: 100,
    marginTop: 20,
    marginHorizontal: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 3,
  },
  
});