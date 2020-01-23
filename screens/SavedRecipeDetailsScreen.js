import React from 'react';
import { Button, Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import RowInstructions from '../RowInstructions'
import RowIngredients from '../RowIngredients'
import {connect} from 'react-redux'
import instructionsPrepared from '../Instructions'
import {addFood} from '../redux/actions'
// import Alert from 'react-bootstrap'
let key = 3000

class SavedRecipeDetailsScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('recipeName').toUpperCase(),
  });

  state = {
    recipe: [[]],
  }

  handleSubmit = (recipeIngredients) => {
      recipeIngredients.map(food => {
        this.props.addFood({
          name: food.name, 
          key: key, 
          checked: false, 
          unit: food.unit,
          amount: food.amount,
          type: food.type })
        key ++
      })
      
      this.setState({message: 'Ingredients added to Grocery List!'})
    }

    
  render () {
    const recipeInstructions = this.props.navigation.getParam('recipeInstructions')
    const recipeIngredients = this.props.navigation.getParam('recipeingredients')
    
    return (
      <ScrollView style = {styles.container  }>
      {
        this.state.message && (
          <Text style = {styles.alertSuccess}>{this.state.message}</Text>)
      }
      <Text style = {styles.title} >Ingredients:</Text>
      {recipeIngredients.map(ingredient =>
      <Text 
        key={ingredient.key}>
          {'\u2022'} {ingredient.name} : {ingredient.amount} {ingredient.unit}
          
        </Text>
      )
      }
       <Text style = {styles.title}>Instructions:</Text>
      {recipeInstructions.map(instruction =>
        <RowInstructions 
          instruction={instruction}
          key={instruction.key}
        />
      )
      }

      <Button title="Load" onPress={() => this.handleSubmit(recipeIngredients)}/>
      </ScrollView>
    )
  }
}



const mapStateToProps = state => ({
  recipe: state.recipe,
  recipeIngredients: state.recipeIngredients,
  food: state.food
})


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,

  },
    alertSuccess: {
    backgroundColor: '#bbedbf',
    textAlign: "center",
  },
})


export default connect(mapStateToProps, {addFood: addFood})(SavedRecipeDetailsScreen)
