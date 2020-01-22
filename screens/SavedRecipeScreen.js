import React from 'react';
import { Button, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import RowInstructions from '../RowInstructions'
import {connect} from 'react-redux'
import instructionsPrepared from '../Instructions'
// import Alert from 'react-bootstrap'

let key = 1;
function removeDuplicates(array, key) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => (
            el[key] === obj[key]
        ))
    )
}

class SavedRecipeScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'My Saved Recipes',
    };
  }
  goToRecipe = () => {
    this.props.navigation.push('RecipeList')
  }


  goToRecipeDetails = (recipe) => {
    this.props.navigation.push('SavedRecipeDetails',recipe)
  }

  goToBrowseRecipe = () => {
    this.props.navigation.push('RecipeList')
  }
  render () {
    let recipeNameList = []
    this.props.recipe.map(instruction => {
      recipeNameList.push({recipeID: instruction.recipeID, recipeName: instruction.recipeName, key: key})
    })
    recipeNameList = removeDuplicates(recipeNameList, 'recipeID')
    
    return (

      <ScrollView style = {styles.container}>
      {(recipeNameList.length === 0)? 
        (
          <View>
          <Text style = {styles.title}>No Recipe Saved yet</Text>
          <Button title="Find a Recipe" onPress={this.goToBrowseRecipe}/>
          </View>
        )
        :
        (
          recipeNameList.map(recipe =>
            <TouchableOpacity
              style = {styles.item}
              onPress = {() => this.goToRecipeDetails(recipe)}>
                <Text style = {styles.title}>{recipe.recipeName}</Text>
            </TouchableOpacity>
          )
        )
      }
      </ScrollView>
    
    )
      
      

  }
}



const mapStateToProps = state => ({
  recipe: state.recipe,
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },

  title: {
    fontSize: 24,
    flex: 1,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
  },

});


export default connect(mapStateToProps)(SavedRecipeScreen)

// {(this.props.recipe !== '') && (this.props.recipe.map(instructionBlock => 
//        instructionBlock.map(instruction =>
//         <RowInstructions 
//           instruction={instruction}
//           key={instruction.key}
//         />
//       ))
//       )
//       }