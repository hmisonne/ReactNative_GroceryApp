import React from 'react'
import {Button, View, StyleSheet, Text, TextInput} from 'react-native'
import Constants from 'expo-constants';
import FlatListRecipes from '../FlatListRecipes'
import {connect} from 'react-redux'
import {resetRecipeList, resetIngredientList, fetchIngredientsbyRecipeID} from '../redux/actions'
import PropTypes from 'prop-types'
import {fetchRecipes} from '../api'
class RecipeListScreen extends React.Component {
  static propTypes ={
    recipes: PropTypes.array,
  }

  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'Browse Recipes',
    };
  }
  state = {
    input: '',
    recipes: [],
  }

  getRecipes= async() => {
    const recipes = await fetchRecipes(this.state.input)
    this.setState({recipes})
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.input !== prevState.input && this.state.input.length > 5){
      this.setState({recipes: []})
      this.getRecipes()
    }
  }


  getRecipeIngredients = async(recipe) => {
    const recipeID = recipe.id
    this.props.resetIngredientList({})
    this.props.fetchIngredientsbyRecipeID(recipeID)
    this.props.navigation.push('RecipeDetails', recipe)
  }

  handleRecipeChange = (input) => {
    this.setState({input})
  }

  handleSelectRecipe = (recipe) => {
    this.getRecipeIngredients(recipe)
  }

  render() {
    return(
      
      <View style= {styles.container}>
        <TextInput
          value= {this.state.input}
          style= {styles.textInput}
          onChangeText={this.handleRecipeChange}
          placeholder="Paella ..."
          />
          <FlatListRecipes
           recipes={this.state.recipes}
           onSelectRecipe={this.handleSelectRecipe}/>
      </View>
    )
  }
}


const mapDispatchToProps = dispatch => ({
  resetIngredientList: food => dispatch(resetIngredientList(food)),
  fetchIngredientsbyRecipeID: recipeID => dispatch(fetchIngredientsbyRecipeID(recipeID))
})

export default connect(null, mapDispatchToProps)(RecipeListScreen)


const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    flex: 1,
    backgroundColor: '#fff',
  },
  textInput: {
    backgroundColor: "white",
    borderColor: "teal",
    borderWidth: 1,
    padding: 5,
    fontSize: 16
  },
});

//   render() {
//     return(
      
//       <View style= {styles.container}>
//         <TextInput
//           value= {this.state.input}
//           style= {styles.textInput}
//           onChangeText={this.handleRecipeChange}
//           placeholder="Paella ..."
//           />
//           <FlatListRecipes
//            recipes={this.props.recipes}
//            onSelectRecipe={this.handleSelectRecipe}/>
//       </View>
//     )
//   }
// }