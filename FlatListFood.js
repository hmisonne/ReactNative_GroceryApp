// Not Working

import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'

import Row from './Row'



const FlatListFood = props => {
  const renderItem = ({item}) => 
  <Row {...item} 
    onToggle={props.onToggle}
    onDelete={props.onDelete}
    onFoodAmountUpdate={props.onFoodAmountUpdate}
    onFoodUnitUpdate={props.onFoodUnitUpdate}
    />

  return(
    <FlatList renderItem={renderItem} data={props.foods} />
  )
}
  

FlatListFood.propTypes = {
  foods: PropTypes.array,
}

export default FlatListFood
