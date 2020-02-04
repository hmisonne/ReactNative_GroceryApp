import React from 'react'
import {FlatList} from 'react-native'
import PropTypes from 'prop-types'
import RowRecipe from './RowRecipe'

const FlatListRecipes = props => {
  const renderItem = ({item}) => 
    <RowRecipe {...item} onSelectRecipe = {props.onSelectRecipe}/>
  return (
	<FlatList 
    renderItem={renderItem} 
    data={props.recipes}
    keyExtractor={ (item, index) => index.toString() }
     />
  )
}


export default FlatListRecipes

  // const renderItem = ({item}) => <RowRecipe {...item} onSelectMovie={props.onSelectMovie}/>
      // keyExtractor={(item) => item.toString()}
