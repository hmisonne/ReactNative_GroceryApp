import {createStore, applyMiddleware} from 'redux'
import {addFood, uncheckAll, updateRecipeList, updateIngredientList, resetRecipeList} from './actions'
import { persistStore, persistReducer} from 'redux-persist'
import reducer from './reducer'
import DATA from '../food'
import thunk from 'redux-thunk'
import recipes from '../recipedata'
import storage from 'redux-persist/lib/storage' 	
// import ingredients from '../ingredientdata'
import Ionicons from 'react-native-vector-icons/Ionicons'
const persistConfig = {
	key: 'root',
	storage,
}

const persistedReducer = persistReducer(persistConfig, reducer)

// for (let i = 0; i< DATA.length; i++){
//     store.dispatch(addFood(DATA[i]))
// }


// for (let i = 0; i< recipes.length; i++){
//     store.dispatch(updateRecipeList(recipes[i]))
// }

// for (let i = 0; i< ingredients.length; i++){
//     store.dispatch(updateIngredientList(ingredients[i]))
// }





// export const store = createStore(reducer, applyMiddleware(thunk))
export const persistor = persistStore(store)
// console.log(store.getState())

// export const store = createStore(persistedReducer, applyMiddleware(thunk))

      <View style = {styles.header}>
      <TouchableOpacity onPress={this.toggleModal}>
          <Ionicons name={`ios-trash`} size={50}  />
      </TouchableOpacity>
      <TouchableOpacity onPress={this.saveList}>
          <Ionicons name={`ios-save`} size={50}  />
      </TouchableOpacity>
      </View>