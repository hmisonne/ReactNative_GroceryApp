import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View} from 'react-native'

export default class AddFoodForm extends React.Component {
  state = {
    name: '',
    description: '',
    isFormValid: false      
  }

  handleNameChange = (name) => {
    this.setState({
      name
    })
  }

  handleDescriptionChange = (description) => {
    this.setState({
      description
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }
        
  validateForm = () => {
    if (
      this.state.name.length > 0
    ) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name) {
      this.validateForm()
    }
  }

  render () {
    return(
      <View style={styles.container}>
        <TextInput 
          style={styles.input}
          value = {this.state.name}
          onChangeText={this.handleNameChange}
          placeholder="Name"
          />
        <TextInput 
          style={styles.input}
          value = {this.state.description}
          onChangeText={this.handleDescriptionChange}
          placeholder="Description"
          />
        <Button title ="Add" onPress={this.handleSubmit} disabled={!this.state.isFormValid}/>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
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
})