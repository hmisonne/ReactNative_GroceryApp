import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import Constants from 'expo-constants';

export default class LoginScreen extends React.Component {
  state = {
    username: '',
    password:''
  }

  _login = () => {
    this.props.navigation.navigate('Main')
  }

  handleUsernameUpdate = username => {this.setState({ username })}
  handlePasswordUpdate = password => {this.setState({ password })}

  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.paragraph}>Login to build your Grocery List</Text>

        <TextInput 
          style={styles.input}
          placeholder="Username"
          value={this.state.username} 
          onChangeText={this.handleUsernameUpdate}/>

        <TextInput 
          style={styles.input}
          placeholder="Password"
          value={this.state.password}
          onChangeText={this.handlePasswordUpdate}
          secureTextEntry/>
        <Button title="Submit" onPress={this._login}/>
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