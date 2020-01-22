import {combineReducers} from 'redux'
import {ADD_ITEM,
  UPDATE_ITEM_AMOUNT,
  TOGGLE_ITEM, 
  REMOVE_ITEM, 
  EMPTY_FOOD_CAT,
  EMPTY_GROCERY_LIST,
  UNCHECK_ALL, 
  UPDATE_RECIPE_LIST,
  UPDATE_INGREDIENT_LIST,
  RESET_RECIPE_LIST,
  RESET_INGREDIENT_LIST,
  UPDATE_ITEM_UNIT,
  ADD_RECIPE,
  ING_REQUEST,
  ING_RQ_FULFILLED,
  ING_RQ_REJECTED,
  ADD_GROCERY_LIST,
  REMOVE_GROCERY_LIST,
  ADD_RECIPE_INGREDIENTS} from './actions'


const foodReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload]
    case UPDATE_ITEM_AMOUNT:
      return state.map(food =>
    (food.key === action.key) 
    ? {...food, amount: action.amount} 
    : food
    )
    case UPDATE_ITEM_UNIT:
      return state.map(food =>
    (food.key === action.key) 
    ? {...food, unit: action.unit} 
    : food
    )
    case TOGGLE_ITEM:
      return state.map(food =>
    (food.key === action.key) 
    ? {...food, checked: !food.checked} 
    : food
    )
    case REMOVE_ITEM:
      return state.filter(food =>
       (food.key !== action.key))
    case UNCHECK_ALL:
      return state.map(food => 
      (food.type === action.foodType)
      ? {...food, checked: false}
      : food
      )
    case EMPTY_FOOD_CAT:
      return state.filter(food =>
       (food.type!== action.foodType))
    case EMPTY_GROCERY_LIST:
      return []
    default:
      return state
  }
}


const groceryListReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_GROCERY_LIST:
      return [...state, action.payload]
    case REMOVE_GROCERY_LIST:
      return state.filter(groceryList =>
       (groceryList.key !== action.key))
    default:
      return state
  }
}

const recipeReducer = (state= [], action) => {
  switch (action.type) {
    case RESET_RECIPE_LIST:
      return []
    case ADD_RECIPE:
      return [...state, action.payload]
    default:
      return state
  }
}

const recipeIngredientsReducer = (state= [], action) => {
  switch (action.type) {
    case ADD_RECIPE_INGREDIENTS:
      return [...state, action.payload]
    default:
      return state
  }
}

const ingredientReducer = (state= [], action) => {
  switch (action.type) {
    case ING_RQ_FULFILLED:
      return [...state, action.payload]
    case ING_RQ_REJECTED:
      console.log('rejected')
      return [...state, {err: action.payload}]
    case UPDATE_INGREDIENT_LIST:
      return [...state, action.payload]
    case RESET_INGREDIENT_LIST:
      return []
    case TOGGLE_ITEM:
      return state.map(food =>
    (food.key === action.key) 
    ? {...food, checked: !food.checked} 
    : food
    )
    default:
      return state
  }
}


const reducer = combineReducers({
  food: foodReducer,
  recipe: recipeReducer,
  recipeIngredients : recipeIngredientsReducer,
  ingredients: ingredientReducer,
  groceryList: groceryListReducer,
})

export default reducer

