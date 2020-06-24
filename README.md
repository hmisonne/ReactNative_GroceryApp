# GroceryApp

 This app allows user to add products to their shopping list and browse recipe. 

 It is built with React Native and is only running on Android devices and Android emulators at the moment.


## Screens

This application has 4 main screens that users can navigate to from the Main Screen:

### Shopping List

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

Shows the list of Grocery List saved.

From this screen, users have 2 options:

1) Visualize the content of a particular list
	With the option to load this list to the "Shopping List" screen

2) Delete this list

### Find A Recipe

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

## Prerequisites

- Node, click [here](https://nodejs.org/en/) to download node
- Android Emulator, click [here](https://developer.android.com/studio) to download android studio
- Or expo Installed on your android device. [Expo App](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en_US)

## How to run the app


**STEP 1 - Install the Expo CLI**

Install Expo CLI by running the following command:

`$ npm install -g expo-cli`

**STEP 3 - Running the React Native application on Expo**

Create a pull request, go to the root of the copied directory on your command line, and install Node package dependencies

```
$ cd GroceryApp
$ npm install
$ expo start
```

From there, scan the QR barcode with your expo app on your android device or click "a" to run on your android studio emulator

**Issues running the app**
[nodejs](https://stackoverflow.com/questions/58120990/how-to-resolve-the-error-on-react-native-start/58122821#58122821)