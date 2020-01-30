import React from 'react';
import { Button, Text, View, StyleSheet,ScrollView} from 'react-native';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {addFood} from '../redux/actions'

let key= 4000

class SavedGroceryDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('name').toUpperCase(),
  });

  handleSubmit = (listG) => {
    listG.map(food => {
      this.props.addFood({
        name: food.name, 
        key: key.toString(), 
        checked: false, 
        unit: food.unit,
        amount: food.amount,
        type: food.type })
    })
    key ++
    this.props.navigation.navigate('SavedGrocery', {nameGroceryLoaded: this.props.navigation.getParam('name')})
  }

 render(){
      const selectedGroceryList = this.props.navigation.getParam('food')
      
     return(
      <View style={styles.container}>
      <ScrollView>
      {selectedGroceryList.map(food => (
        <Text
        key= {food.key}> {food.name}: {food.amount} {food.unit} </Text>

      ))
      }
      <Button title="Load" onPress={() => this.handleSubmit(selectedGroceryList)}/>

      </ScrollView>
       
      </View>
    )
  }
  
} 



export default connect(null, {addFood: addFood})(SavedGroceryDetailsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
  
});

