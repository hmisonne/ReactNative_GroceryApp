import React from 'react'
import AddListForm from '../AddListForm'
import {connect} from 'react-redux'

import {addGroceryList} from '../redux/actions'

let key = 2000
class AddGroceryListScreen extends React.Component {
  static navigationOptions = {
    headerTitle: 'New List',
  }

  handleSubmit = (formState) => {
    key ++
    this.props.addGroceryList({
      name: formState.name,
      description: formState.description, 
      key: key.toString(),
      food: this.props.food, 
    })
    this.props.navigation.navigate('FoodByCat',{nameGrocerySaved: formState.name})
  }

  render(){
    return(
      <AddListForm onSubmit={this.handleSubmit}/>
    )
  }
}

const mapStateToProps = state => ({
  food: state.food,
})


export default connect(mapStateToProps, {addGroceryList: addGroceryList})(AddGroceryListScreen)