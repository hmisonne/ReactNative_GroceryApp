import React from 'react';
import { Button, Text, View, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import RowInstructions from '../RowInstructions'
import {connect} from 'react-redux'
import {removeRecipe, resetRecipeList} from '../redux/actions'
import instructionsPrepared from '../Instructions'


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
    return (

      <ScrollView style = {styles.container}>
      {(this.props.recipe.length === 0)? 
        (
          <View>
          <Text style = {styles.title}>No Recipe Saved yet</Text>
          <Button title="Find a Recipe" onPress={this.goToBrowseRecipe}/>
          </View>
        )
        :
        (
          this.props.recipe.map(recipe =>
            <TouchableOpacity
              style = {styles.item}
              onPress = {() => this.goToRecipeDetails(recipe)}
              key = {recipe.key}>
                <Text style = {styles.title}>{recipe.recipeName}</Text>
                <View style={styles.rightContainer}>
                  <Button color="#ff5c5c" 
                    title='Remove'
                    onPress={() => this.props.removeRecipe(recipe.key)}/>
                </View>
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
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },

});


export default connect(mapStateToProps, {removeRecipe: removeRecipe, resetRecipeList: resetRecipeList})(SavedRecipeScreen)

// {(this.props.recipe !== '') && (this.props.recipe.map(instructionBlock => 
//        instructionBlock.map(instruction =>
//         <RowInstructions 
//           instruction={instruction}
//           key={instruction.key}
//         />
//       ))
//       )
//       }