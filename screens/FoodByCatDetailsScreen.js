import React from 'react';
import { Button, Text, View, Image, StyleSheet,ScrollView, TouchableOpacity} from 'react-native';
import FlatListFood from '../FlatListFood'
import Row from '../Row'
import {toggleItem, 
  removeItem, 
  uncheckAll, 
  updateFoodAmount, 
  updateFoodUnit, 
  emptyFoodCat} from '../redux/actions'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Modal from "react-native-modal";

class FoodByCatDetailsScreen extends React.Component {
  static propTypes = {
    foodItem: PropTypes.array,
    toggleItem: PropTypes.func,
    removeItem:PropTypes.func,
    uncheckAll: PropTypes.func,
    emptyFoodCat: PropTypes.func,
    updateFoodAmount: PropTypes.func,
    updateFoodUnit: PropTypes.func,
  }

  static navigationOptions = ({navigation}) => ({
    headerTitle: navigation.getParam('type').toUpperCase(),
    headerRight: (
      <Button title="Add" onPress={() => navigation.navigate('Addfood', {type: navigation.getParam('type')})}/>
    )
  });

  state = {
    isModalVisible: false
  };


  handleUncheck = () => {
    this.props.uncheckAll(this.props.navigation.getParam('type'));
    this.setState({ isModalVisible: false });
  }

  emptyFoodCat = () => {
    this.props.emptyFoodCat(this.props.navigation.getParam('type'));
    this.setState({ isModalVisible: false });
  }

  handleSelectFood = food => {
    this.props.navigation.push('FoodDetails', food)
  }

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render(){
    const foodByCat = this.props.foodItem.filter(food => 
      food.type === this.props.navigation.getParam('type'))
    return(
      <View style={styles.container}>

      <ScrollView>
        {foodByCat.map(food => (
          <Row food={food} 
            key= {food.key}
            onToggle={() => this.props.toggleItem(food.key)}
            onDelete={() => this.props.removeItem(food.key)}
            onFoodAmountUpdate={(amount) => this.props.updateFoodAmount(food.key, amount)}
            onFoodUnitUpdate={(unit) => this.props.updateFoodUnit(food.key, unit)}
          />
          ))
        }
      </ScrollView>

      <View style = {styles.moreIcon}>
        <TouchableOpacity onPress={this.handleUncheck}>
          <Ionicons name={`ios-more`} size={50}  
            onPress={this.toggleModal}/>
        </TouchableOpacity>
      </View>

      <Modal isVisible={this.state.isModalVisible}>
        <View style={styles.modal}>
          <View style={{margin: 24}}>
            <Button title='Uncheck All' onPress={this.handleUncheck}/>
          </View>
          <View style={{margin: 24}}>
            <Button title='Empty List' onPress={this.emptyFoodCat}/>
          </View>
          <View style={{margin: 24}}>
            <Button title="Go back" onPress={this.toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
    )
  }
  
} 
const mapStateToProps = state => ({
  foodItem: state.food,
})

const mapDispatchToProps = dispatch => ({
  toggleItem: key => dispatch(toggleItem(key)),
  removeItem: key => dispatch(removeItem(key)),
  uncheckAll: foodType => dispatch(uncheckAll(foodType)),
  emptyFoodCat: foodType => dispatch(emptyFoodCat(foodType)),
  updateFoodAmount: (key, amount) => dispatch(updateFoodAmount(key, amount)),
  updateFoodUnit: (key, unit) => dispatch(updateFoodUnit(key, unit))
})

export default connect(mapStateToProps, mapDispatchToProps)(FoodByCatDetailsScreen)

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
    moreIcon :{
      alignItems: 'flex-end',
      margin: 7,

  },
  modal: {
    flex: 1,
    justifyContent: 'center', 
  },
 
  
});



      //  <View>
      //   <FlatListFood
      //     foods={this.props.foodItem.filter(food => 
      //       food.type === this.props.navigation.getParam('type'))}
      //     onToggle={() => this.props.toggleItem(food.key)}
      //     onDelete={() => this.props.removeItem(food.key)}
      //     onFoodAmountUpdate={(amount) => this.props.updateFoodAmount(food.key, amount)}
      //     onFoodUnitUpdate={(unit) => this.props.updateFoodUnit(food.key, unit)}
      //     />
      // </View>


// return(
//       <View>
//       <Button title='Uncheck All' onPress={this.handleUncheck}/>
//       <Button title='Empty List' onPress={this.emptyList}/>
//        <ScrollView>
//       {this.props.foodItem.filter(food => 
//       food.type === this.props.navigation.getParam('type')).map(food => (
//         <Row food={food} 
//         onToggle={() => this.props.toggleItem(food.key)}
//         onDelete={() => this.props.removeItem(food.key)}
//         onFoodAmountUpdate={(amount) => this.props.updateFoodAmount(food.key, amount)}
//         onFoodUnitUpdate={(unit) => this.props.updateFoodUnit(food.key, unit)}
//         />
//       ))}
//       </ScrollView>
//       </View>
//     )
