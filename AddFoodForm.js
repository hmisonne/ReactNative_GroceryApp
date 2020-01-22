import React from 'react'
import {Button, KeyboardAvoidingView, StyleSheet, TextInput, View, Picker} from 'react-native'

const unitFood = ['ct', 'lb', 'g', 'kg']
let key = 1;
export default class AddFoodForm extends React.Component {
  state = {
    name: '',
    amount: '',
    unit:'',
    isFormValid: false      
  }

  handleNameChange = (name) => {
    this.setState({
      name
    })
  }

  handleQuantityChange = (amount) => {
    this.setState({
      amount
    })
  }

  handleUnitChange = (unit) => {
    this.setState({
      unit
    })
  }

  handleSubmit = () => {
    this.props.onSubmit(this.state);
  }
        
  validateForm = () => {
    if (
      +this.state.amount > 0 &&
      this.state.name.length > 0
      
    ) {
      this.setState({isFormValid: true})
    } else {
      this.setState({isFormValid: false})
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.name !== prevState.name || this.state.amount !== prevState.amount) {
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
          <View style={styles.rowItem}>
            <TextInput 
            keyboardType="numeric"
            style={styles.input}
            value = {this.state.amount}
            onChangeText={this.handleQuantityChange}
            placeholder="Quantity"
            />
            <Picker
              selectedValue={this.state.unit}
              style={styles.input}
              onValueChange={this.handleUnitChange}
            >
            <Picker.Item label={this.state.unit} value={this.state.unit}/>
            {unitFood.filter(unit => unit !== this.state.unit).map(unit => (
              <Picker.Item 
                label={unit} 
                value={unit}
                key={key++}/>
            )
            )}
            </Picker>
          </View>
          
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
  rowItem: {
    flexDirection: 'row',
    marginBottom: 20,
  }
})