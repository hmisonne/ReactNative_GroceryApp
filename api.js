const apikey = 'f33eaf665f2c4448b30565c51eb5f399'
const addKeys = (val, key) => ({key, ...val})
const processIngredients = (val, key) => (
  {key, 
  name: val.name,
  amount: val.amount.us.value,
  unit:  val.amount.us.unit,
  checked: true, 
  type:'custom'})
const processSteps = (val, key) => (
  {
  key,
  step: val.step,
  number: val.number,
  })




export const fetchRecipes = async(input) => {
  const url = `https://api.spoonacular.com/recipes/search?query=${input}&apiKey=${apikey}`
  try{
    const response = await fetch(url)
    const {results}= await response.json()
    return results.map(addKeys)
  }
  catch(err) {
    return console.log(err)
  }
}

export const fetchRecipeDetails = async(id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/ingredientWidget.json?apiKey=${apikey}`
  try{
    const response = await fetch(url)
    const {ingredients}= await response.json()
    return ingredients.map(processIngredients)
  }
  catch(err) {
    return console.log(err)
  }
}

export const fetchRecipeInstructions = async(id) => {
  const url = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=${apikey}`
  try{
    const response = await fetch(url)
    const instructionSteps = await response.json()
    let instructionDetails = []
    for (let i=0; i< instructionSteps.length; i++){
      instructionDetails.push(instructionSteps[i].steps.map(processSteps))
    }
    return instructionDetails
  }
  catch(err) {
    return console.log(err)
  }
}


// export const fetchRecipeInstructions = async(id) => {
//   const url = `https://api.spoonacular.com/recipes/324694/analyzedInstructions?apiKey=${apikey}`
//   try{
//     const response = await fetch(url)
//     const {steps}= await response.json()
//     return steps.map(processSteps)
//   }
//   catch(err) {
//     return console.log(err)
//   }
// }