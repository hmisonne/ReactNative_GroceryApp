import React from 'react';
import { Button, Text, View, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {connect} from 'react-redux'

class MainScreen extends React.Component {



  goToRecipe = () => {
    this.props.navigation.push('RecipeList')
  }

  goToShoppingList = () => {
    this.props.navigation.push('FoodByCat')
  }

  goToSavedGroceryList = () => {
    this.props.navigation.push('SavedGrocery')
  }

  goToSavedRecipe = () => {
    this.props.navigation.push('SavedRecipe')
  }

  render(){
    return(
      <View style={styles.container}>


      <View style={styles.button}>
        <Button title='Create/Continue your Shopping List'
          onPress={this.goToShoppingList}/>
        </View>

        <View style={styles.button}>
        <Button title='Find a Recipe'
          onPress={this.goToRecipe}/>
        </View>

      <View style={styles.button}>
        <Button title='My Saved Recipes'
          onPress={this.goToSavedRecipe}/>
        </View>

        <View style={styles.button}>
        <Button title='My saved grocery list'
          onPress={this.goToSavedGroceryList}/>
        </View>




      </View>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food,
})

export default connect(mapStateToProps)(MainScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  button: {
    marginVertical: 10,
    margin: 20,
  },
  text: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    position: 'absolute', 
    width: '100%', 
    bottom: 0, 
    justifyContent: 'center', 
    alignItems: 'center', 

  },
   
  
  
});


