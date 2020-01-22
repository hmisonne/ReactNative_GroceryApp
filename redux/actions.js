import {fetchRecipes, fetchRecipeDetails} from '../api'
// Grocery list manual data
export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const REMOVE_ITEM = 'REMOVE_ITEM'
export const UNCHECK_ALL = 'UNCHECK_ALL'
export const UPDATE_ITEM_AMOUNT = 'UPDATE_ITEM_AMOUNT'
export const UPDATE_ITEM_UNIT = 'UPDATE_ITEM_UNIT'
export const EMPTY_FOOD_CAT = 'EMPTY_FOOD_CAT'

export const EMPTY_GROCERY_LIST = 'EMPTY_GROCERY_LIST'
export const ADD_GROCERY_LIST = 'ADD_GROCERY_LIST'
export const REMOVE_GROCERY_LIST = 'REMOVE_GROCERY_LIST'

export const RESET_RECIPE_LIST = 'RESET_RECIPE_LIST'
export const RESET_INGREDIENT_LIST = 'RESET_INGREDIENT_LIST'


export const ING_REQUEST = 'ING_REQUEST'
export const ING_RQ_FULFILLED = 'ING_RQ_FULFILLED'
export const ING_RQ_REJECTED = 'ING_RQ_REJECTED'

export const ADD_RECIPE = 'ADD_RECIPE'

export const ADD_RECIPE_INGREDIENTS = 'ADD_RECIPE_INGREDIENTS'





// Update on Food Elements
export const addFood = update => ({
  type: ADD_ITEM,
  payload: update,
  })

export const toggleItem = key => ({
    type: TOGGLE_ITEM,
    key,
}) 

export const removeItem = key => ({
  type: REMOVE_ITEM,
  key,
})

export const uncheckAll = foodType => ({
  type: UNCHECK_ALL,
  foodType,
})

export const emptyFoodCat = foodType => ({
  type: EMPTY_FOOD_CAT,
  foodType,
})

export const updateFoodAmount = (key, amount) => ({
  type: UPDATE_ITEM_AMOUNT,
  key,
  amount,
})

export const updateFoodUnit = (key, unit) => ({
  type: UPDATE_ITEM_UNIT,
  key,
  unit,
})

// Update on Grocery
export const addGroceryList = update => ({
  type: ADD_GROCERY_LIST,
  payload: update,
})

export const removeGroceryList = key => ({
  type: REMOVE_GROCERY_LIST,
  key,
})

export const emptyGroceryList = update => ({
  type: EMPTY_GROCERY_LIST,
  payload: update,
})


// Update on Recipes
export const addRecipe = update => ({
  type: ADD_RECIPE,
  payload: update,
})

export const addRecipeIngredients = update => ({
  type: ADD_RECIPE_INGREDIENTS,
  payload: update,
})

export const resetRecipeList = update => ({
  type: RESET_RECIPE_LIST,
  payload: update,
})

export const resetIngredientList = update => ({
  type: RESET_INGREDIENT_LIST,
  payload: update,
})

  // Async action creator

export const fetchIngredientsbyRecipeID = RecipeID => async dispatch => {
  dispatch({type: ING_REQUEST})
  try {
    const ingredients = await fetchRecipeDetails(RecipeID)
    for (let i = 0; i< ingredients.length; i++){
      dispatch({type: ING_RQ_FULFILLED, payload: ingredients[i]})
    }
  } catch (err) {
    console.log('rejection')
    dispatch({type: RECIPE_RQ_REJECTED, payload: err.message})
  }
} 










// old actions

// export const UPDATE_RECIPE_LIST = 'UPDATE_RECIPE_LIST'
// export const UPDATE_INGREDIENT_LIST = 'UPDATE_INGREDIENT_LIST'

// export const updateRecipeList = update => ({
//   type: UPDATE_RECIPE_LIST,
//   payload: update,
// })

// export const updateIngredientList = update => ({
//   type: UPDATE_INGREDIENT_LIST,
//   payload: update,
// })