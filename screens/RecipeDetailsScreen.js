import React from 'react';
import { Button, Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import RowIngredients from '../RowIngredients'
import RowInstructions from '../RowInstructions'
import {connect} from 'react-redux'
import {toggleItem, addFood, updateIngredientList, addRecipe, addRecipeIngredients} from '../redux/actions'
import store from '../redux/store'
import instructionsPrepared from '../Instructions'
import {fetchRecipeInstructions} from '../api'
import PropTypes from 'prop-types'

// import Alert from 'react-bootstrap'

let key = 1000
class RecipeDetailsScreen extends React.Component {
    static propTypes = {
      ingredients: PropTypes.array,
      toggleItem: PropTypes.func,
      addFood: PropTypes.func,
    }
    
    static navigationOptions = ({navigation}) => {
    return {
      headerTitle: navigation.getParam('title'),
      headerRight: ''}
    }

    state ={
      instructions: [[]],
    }

  componentDidMount() {
    const recipeID = this.props.navigation.getParam('id')
    this.getInstructions(recipeID)
  }

  getInstructions= async(recipeID) => {
    const instructions = await fetchRecipeInstructions(recipeID)
    this.setState({instructions})
  }

  saveRecipe = () => {
    // Save Recipe Instructions
    const instructions = this.state.instructions;
    let recipeInstructions = [];
    for (let i = 0; i < instructions.length; i++){
      for (let j = 0; j < instructions[i].length; j++){
        recipeInstructions.push({
          number: instructions[i][j].number,
          step: instructions[i][j].step,
          key: instructions[i][j].key,
        })
      }
    }
    // Save Recipe Ingredients
    const ingredients = this.props.ingredients;
    let recipeingredients = [];
      for (let i = 0; i< ingredients.length; i++){
        recipeingredients.push({
        key: key, 
        name: ingredients[i].name, 
        type: 'custom',
        amount: ingredients[i].amount,
        unit: ingredients[i].unit,
        checked: false,
        ref: this.props.navigation.getParam('title'),
         })
        key ++
      }
    // Save Recipe
    this.props.addRecipe({
          key: key,
          recipeName: this.props.navigation.getParam('title'),
          recipeID: this.props.navigation.getParam('id'),
          recipeInstructions: recipeInstructions,
          recipeingredients: recipeingredients,
        })

      this.setState({message: 'Recipe Saved!'})

  }
    
    handleSubmit = (formState) => {
      for (let i = 0; i< formState.length; i++){
        this.props.addFood({
        key: key, 
        name: formState[i].name, 
        type: 'custom',
        amount: formState[i].amount,
        unit: formState[i].unit,
        checked: false,
        ref: this.props.navigation.getParam('title'),
        recipeID: this.props.navigation.getParam('id'),
         })
        key ++
      } 
      this.setState({message: 'ingredients added to list'})


    }
      
    
  render () {
    const formState = this.props.ingredients.filter(ingredient => ingredient.checked === true)
    return (
      <ScrollView>
        {this.state.message && (
        <Text style= {styles.alertSuccess}>{this.state.message}</Text>
        )}
      <Button title= 'Add to My Custom List' onPress={() => this.handleSubmit(formState)}/>
      <Button title= 'Save Recipe' onPress={this.saveRecipe}/>

      
      {this.props.ingredients.map(ingredient => (
        <RowIngredients 
          ingredient={ingredient}
          key={ingredient.key}
          onToggle={() => this.props.toggleItem(ingredient.key)}/>
      ))
      
      }
      <Text>Instructions:</Text>
      {(this.props.ingredients !== '') && (this.state.instructions.map(instructionBlock => 
       instructionBlock.map(instruction =>
        <RowInstructions 
          instruction={instruction}
          key={instruction.key}
        />
      ))
      )
      }
      </ScrollView>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  toggleItem: key => dispatch(toggleItem(key)),
  addFood: food => dispatch(addFood(food)),
  addRecipeIngredients: recipe => dispatch(addRecipeIngredients(recipe)),
  addRecipe: recipe => dispatch(addRecipe(recipe))
})

const mapStateToProps = state => ({
  ingredients: state.ingredients,
})



export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetailsScreen)

//     let instructionProcess = []
//     for (let i = 0; i < steps.length; i++){
//   instructionProcess.push(steps[i].steps.map(processSteps))
// }
//     console.log('api response')
//     console.log(instructionProcess)



const styles = StyleSheet.create({
   alertSuccess: {
    backgroundColor: '#bbedbf',
    textAlign: "center",
  },
});
