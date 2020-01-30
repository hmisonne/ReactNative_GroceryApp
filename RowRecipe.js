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

const RowRecipe = (props) => 
(
    <TouchableOpacity 
    style={styles.item}
    onPress = {() => props.onSelectRecipe(props)}
    >
      
      <Text style={styles.title}>{props.title}</Text>
      <Text >Ready in: {props.readyInMinutes}min</Text>
      <Text >Servings: {props.servings}</Text>
        
    </TouchableOpacity>
);



export default RowRecipe

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  item: {
    backgroundColor: '#ffffff',
    padding: 20,
    marginVertical: 8,
    // flexDirection: 'row',
    // alignItems: 'center',
  },
 
  title: {
    fontSize: 24,
    flex: 1,
    flexWrap: 'wrap',
  }
});

// <Image source={{uri: props.image}}
//        style={{width: 50, height: 50}} />
     