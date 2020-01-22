import * as React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,

} from 'react-native';
import store from './redux/store'

let key = 1;
const unitFood = ['ct', 'lb', 'g', 'kg']

export default class DropDownSelect extends React.Component {
  state = {
    amount: this.props.amount || '',
    unit: this.props.unit || ''
  }

  handleAmountChange = (amount) => {
    this.setState({amount})
  }

  handleUnitChange = (unit, index) => {
    this.setState({unit})
  }

  componentDidUpdate(prevProps, prevState){
    if (this.state.amount !== prevState.amount){
      this.props.onFoodAmountUpdate(this.state.amount)
    }
    else if (this.state.unit !== prevState.unit){
      this.props.onFoodUnitUpdate(this.state.unit)
    }
  }
  
  render(){

    return (
       <View style={styles.container}>
       <TextInput style={styles.item} 
        value={this.state.amount.toString()}
        onChangeText={this.handleAmountChange
          }
          keyboardType="numeric"/>

        <Picker
          selectedValue={this.state.unit}
          style={styles.picker}
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
  ) 
  }
  
}


const styles = StyleSheet.create({
  container : {
    flexDirection: 'row',
    alignItems: 'center',
  },
  item: {
    height: 20, 
    width: 40
  },
  picker: 
  {
    height: 30,
    width: 100
    },
  pickerText:{
    fontSize: 100
  }
});

