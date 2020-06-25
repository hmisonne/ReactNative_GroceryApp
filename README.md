# GroceryApp

This is my very first mobile app that I developed from scratch with React Native! 
As a first project, I decided to build a Grocery List to add products to a shopping list and toggle a button to mark items as added to cart. I thought about this idea as I was getting bored of sending grocery list by text to my partner which was redundant, sometimes confusing, and not very organized! 
The idea of this app was to solve this issue and also provide advanced features such as browsing recipes and being able to add all the ingredients to the grocery list.

This project covers the main features of a React Native app: 
- Use of React Components
- Navigation between screens
- Ability to Create, Read, Update and Delete element
- State Management
- Retrieve and process data from API call
- Use of Redux : Reducer, Action, Store

It is currently only able to run on Android devices and Android emulators.


## Screens

This application has 4 main screens that users can navigate to from the Home Screen:

### Shopping List

![Shopping List demo](demo/FoodCat.gif)

Users can select a spectific Food Category (Fruits, Veggies, Dairy, Grains, Meat and Custom) to build their list and see how many items are in each category and see the status of each list:
- white: list not started
- green: all items have been marked as "checked"
- orange: some items are still "unchecked"

From this screen, users have 3 options:

1) Go to a particular Food Category (Fruits...) 

	User can add an item with the name, quantity and unit (for example: Berries, 1, ct).

	Once validated, it will be added to the "food category" list. From there, the quantity and unit can be changed or the item can be deleted from the list.

	At the bottom of the screen, there are options to uncheck all items or to empty the list.

2) Empty the list
	Remove all the items added to each list

3) Save this list
	Allow users to enter a Name and Description for their current Shopping List and add it to My Saved Grocery List screen

### My Saved Grocery List

![GroceryList demo](demo/GroceryList.gif)

Shows the list of Grocery List saved.

From this screen, users have 2 options:

1) Visualize the content of a particular list
	With the option to load this list to the "Shopping List" screen

2) Delete this list

### Find A Recipe

![Recipes demo](demo/Recipes.gif)

Allows users to browse recipe based on the name of a recipe.
After entering the name of a recipe, the user will see a list of Recipe names with the number of serving and preparation time.

Once a particular recipe is selected, the ingredients and recipe instructions will be displayed. 

From there, users can:

1) Add all the ingredients to their Custom List (accessible on their Shopping List screen)
	They can also unselect the ingredients they do not want to add to their custom list

2) Save this recipe to "My Saved Recipe Screen"


### My Saved Recipes

Shows the list of Recipes saved.

From this screen, users have 2 options:

1) Visualize the content of a recipe (ingredients and instructions)
	With the option to load this list to the "Shopping List" screen

2) Delete this Recipe


## Data 

This app is using 4 different type of data:

- food: to manage the items added to a specific Food Category List
```
[
	{
		name: "Strawberries", 
		key: 101, 
		checked: false, 
		unit: 1,
		amount: lb,
		type: 'Fruits'
	},
	{
		name: "Turkey", 
		key: 102, 
		checked: true, 
		unit: 1,
		amount: ct,
		type: 'Meat'
	},

]
```

- groceryList: to manage the lists of groceries saved
```
[
	{
		name: "Thanksgiving Dinner",
		description: "Feast for 2 ppl", 
		key: 2002,
		food: [
			{
				name: "Strawberries", 
				key: 101, 
				checked: false, 
				unit: 1,
				amount: lb,
				type: 'Fruits'
			},
			{
				name: "Turkey", 
				key: 102, 
				checked: true, 
				unit: 1,
				amount: ct,
				type: 'Meat'
			},

		], 
	}
]
```

- recipe: to manage the lists of recipes saved
```
[	
	{
		key: 3001,
		recipeName: 'Spicy Paella',
		recipeID: 4050,
		recipeInstructions: [
			{
				number:1,
				step:"Preheat the oven to 200 degrees F."
				key: 1,
			},
			{
				number: 2,
				step: "Whisk together rice and spices",
				key: 2,
			},

		],
		recipeingredients: [
			{
		        key: 22, 
		        name: 'Rice', 
		        type: 'custom',
		        amount: 2,
		        unit: 'lb',
		        checked: false,
		        ref: 'Spicy Paella',
	         },
			{
				key: 23, 
				name: 'Paprika', 
				type: 'custom',
				amount: 1,
				unit: 'ct',
				checked: false,
				ref: 'Spicy Paella',
			}
		]

	}
]
```

- ingredient: to manage the ingredients fetched by RecipeID from the spoonacular API
```
[
    {
        "amount": {
            "us": {
                "unit": "cups",
                "value": 1.5
            }
        },
        "image": "blueberries.jpg",
        "name": "blueberries"
    },
]
```


### Redux

To manage the state of the application, I used Redux and I created 4 reducers that manage each data type allows user to perform Create, Read, Update and Delete actions.


### Spoonacular API 

To retrieve the data for recipe lists based on user input, recipe ingredients and instructions, I used [spoonacular API](https://spoonacular.com/food-api)


## How to run the app

### Prerequisites

- Node, click [here](https://nodejs.org/en/) to download node
- Android Emulator, click [here](https://developer.android.com/studio) to download android studio
- Or expo Installed on your android device. [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

### Instructions

**STEP 1 - Install the Expo CLI**

Install Expo CLI by running the following command:

`$ npm install -g expo-cli`

**STEP 2 - Running the React Native application on Expo**

Create a pull request, go to the root of the copied directory on your command line, and install Node package dependencies

```
$ cd GroceryApp
$ npm install
$ expo start
```

From there, scan the QR barcode with your expo app on your android device or click "a" to run on your android studio emulator

## Issues running the app

You may want to check this [stack overflow discussion](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start/58122821#58122821) if you are having an error with metro-config while running `expo start`
