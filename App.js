import * as React from 'react';
import {Provider} from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import {
  createStackNavigator,
  createSwitchNavigator
} from 'react-navigation'

import FoodByCatScreen from './screens/FoodByCatScreen'
import FoodByCatDetailsScreen from './screens/FoodByCatDetailsScreen'
import SavedGroceryDetailsScreen from './screens/SavedGroceryDetailsScreen'
import MainScreen from './screens/MainScreen'
import AddFoodScreen from './screens/AddFoodScreen'
import LoginScreen from './screens/LoginScreen'
import RecipeListScreen from './screens/RecipeListScreen'
import RecipeDetailsScreen from './screens/RecipeDetailsScreen'
import AddGroceryListScreen from './screens/AddGroceryListScreen'
import SavedRecipeScreen from './screens/SavedRecipeScreen'
import SavedRecipeDetailsScreen from './screens/SavedRecipeDetailsScreen'
import SavedGroceryScreen from './screens/SavedGroceryScreen'
import {store, persistor} from './redux/store'


const MainStack = createStackNavigator(
  {
    Main: MainScreen,
    FoodByCat: FoodByCatScreen,
    FoodByCatDetails: FoodByCatDetailsScreen,
    Addfood: AddFoodScreen,
    RecipeList: RecipeListScreen,
    RecipeDetails: RecipeDetailsScreen,
    AddGroceryList: AddGroceryListScreen,
    SavedGrocery: SavedGroceryScreen,
    SavedGroceryDetails: SavedGroceryDetailsScreen,
    SavedRecipe: SavedRecipeScreen,
    SavedRecipeDetails: SavedRecipeDetailsScreen,
  },
  {
    initialRouteName: 'Main'
  }
)


  
const AppNavigator = createSwitchNavigator(
  {
    Login: LoginScreen,
    Main: MainStack,
  },

)


export default class App extends React.Component {
 render() {
    return (
    <Provider store={store}>

      <AppNavigator/>

    </Provider>
    );
  }
}

//  render() {
//     return (
//     <Provider store={store}>
//     <PersistGate loading={null} persistor={persistor}>
//       <AppNavigator/>
//       </PersistGate>
//     </Provider>
//     );
//   }
// }

