import React from 'react'
import AddFoodForm from '../AddFoodForm'
import {connect} from 'react-redux'
import {addFood} from '../redux/actions'

let key = 100
class AddFoodScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New Food',
  }

  handleSubmit = (formState) => {
    key ++
    this.props.addFood({
      name: formState.name, 
      key: key, 
      checked: false, 
      unit: formState.unit,
      amount: formState.amount,
      type: this.props.navigation.getParam('type') })
    this.props.navigation.navigate('FoodByCatDetails', 
      {type: this.props.navigation.getParam('type') })
  }
  render(){
    return(
      <AddFoodForm onSubmit={this.handleSubmit}/>
    )
  }
}

export default connect(null, {addFood: addFood})(AddFoodScreen)
      // <Text>{this.state.message}</Text>


            // this.setState({message: 'ingredients added to list'})

// this.props.navigation.push('FoodByCatDetails  ', 
//       {type: this.props.navigation.getParam('type') })