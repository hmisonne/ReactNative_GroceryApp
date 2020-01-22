import React from 'react';
import { Button, Text, View, Image, StyleSheet, ImageBackground, ScrollView, TouchableOpacity} from 'react-native';
import Constants from 'expo-constants';
import {connect} from 'react-redux'
import {emptyGroceryList} from '../redux/actions'
import Modal from "react-native-modal";
import Ionicons from 'react-native-vector-icons/Ionicons'

const foodType= [
  [
    {name:'fruits', img: require('../images/fruits.png'), key: 10},
    {name:'veggies', img: require('../images/veggies.png'), key: 20},
  ],
  [
    {name:'dairy', img: require('../images/dairy.png'), key: 30},
    {name:'grains', img: require('../images/grains.png'), key: 40}],
  [
    {name:'meat', img: require('../images/meat.png'), key: 50},
    {name:'custom', img: require('../images/custom.png'), key: 60},
  ]
]

const colorStatus ={
  0: '#FFFFFF',
  1: '#FF9800',
  2: 'green'
}

class FoodByCatScreen extends React.Component {
  static navigationOptions = ({navigation}) => ({
    headerTitle: 'My Grocery List',
  });

  state = {
    isModalVisible: false
  };

  goToFoodByCatScreen(foodType) {
    return this.props.navigation.push('FoodByCatDetails',{type: foodType})
  }


  goToRecipe = () => {
    this.props.navigation.push('RecipeList')
  }

  saveList = () => {
    this.props.navigation.push('AddGroceryList')
  }

  loadList = () => {
    this.props.navigation.push('LoadGroceryList')
  }

  emptyGroceryList = () => {
    this.props.emptyGroceryList({})
    this.setState({ isModalVisible: !this.state.isModalVisible });
  }

  foodListLength(foodType) {
    return this.props.food.filter(food => food.type === foodType).length
  }

  foodListCheck(foodType) {
    return this.props.food.filter(food => food.type === foodType && food.checked === true).length
  }

  foodListStatus(foodType) {
    if (this.foodListLength(foodType) === 0){
      return 0
    }
    else if (this.foodListLength(foodType) > this.foodListCheck(foodType)){
      return 1
    }
    else {
      return 2
    }
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render(){
    const groceryNameSaved = this.props.navigation.getParam('nameGrocerySaved')
    return(
      <View style={styles.container}>
      {groceryNameSaved && (
        <Text style = {styles.alertSuccess}>{groceryNameSaved} saved !</Text>
        )
      }

      
      <Modal isVisible={this.state.isModalVisible}>
          <View style={styles.modal}>
            <Text style={styles.modalText}>Are you sure you want to empty your list?</Text>
            <View style={{margin: 24}}>
              <Button title="Confirm" onPress={this.emptyGroceryList} />
            </View>
            <View style={{margin: 24}}>
            <Button title="Go back" onPress={this.toggleModal} />
            </View>
          </View>
        </Modal>

      <ScrollView >

       
          {foodType.map((foodelement,index) => (
            <View 
              style={styles.vignetteRow}
              key={index}>
            {foodelement.map(food =>(
              <TouchableOpacity 
                onPress={() => this.goToFoodByCatScreen(food.name)} 
                style={styles.vignetteItem}
                key={food.key}
                >
                <ImageBackground
                  style={styles.vignetteImage}
                  source={food.img}>
                  <View style={[styles.text, {backgroundColor: colorStatus[this.foodListStatus(food.name)]}]}
                    > 
                    <Text style={{fontSize:18}}> {food.name.toUpperCase()} </Text>
                    <Text style={{fontSize:18}}> {this.foodListCheck(food.name)}/{this.foodListLength(food.name)} </Text>
                  </View>
                </ImageBackground>
              </TouchableOpacity>
          
            ))}
            </View>
          ))

        }



        <View style={styles.button}>
        <Button title='Empty List'
          onPress={this.toggleModal}/>
        </View>


        <View style={styles.button}>
        <Button title='Save this List'
          onPress={this.saveList}/>
        </View>




        </ScrollView>
      </View>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food,
})

export default connect(mapStateToProps, {emptyGroceryList: emptyGroceryList})(FoodByCatScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,

  },
  vignetteRow :{
    flexDirection: 'row',
    justifyContent: 'space-between',

    margin: 20
  },
  vignetteImage: {
    width: 170,
    height: 170},
  paragraph: {
    margin: 7,
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
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
  modal: {
    flex: 1,
    justifyContent: 'center', 
  },
  modalText: {

    fontSize:18,
    margin:24,
    fontWeight: 'bold',
    color: 'white',
    textAlign: 'center',
   
  },
  alertSuccess: {
    backgroundColor: '#bbedbf',
    textAlign: "center",
  },
  header: {
    flexDirection: 'row',
    margin: 7,
    justifyContent: 'space-between',
  }
  
});


