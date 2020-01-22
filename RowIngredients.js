import React from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  SafeAreaView,
  SectionList,
  Switch,
  Button,
  Image,
  TouchableOpacity
} from 'react-native';
import Constants from 'expo-constants';

const RowIngredients = (props) => 
(
    <View style={styles.item}>
      <Switch 
        value={props.ingredient.checked}
        onValueChange={props.onToggle}/>
      <Text style={styles.title}>{props.ingredient.name}: {props.ingredient.amount} {props.ingredient.unit}</Text>
    </View>
);



export default RowIngredients

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    marginVertical: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    flex: 1,
    flexWrap: 'wrap',
  }
});

