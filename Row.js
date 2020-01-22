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
  Picker,
  TouchableOpacity
} from 'react-native';
import DropDownSelect from './DropDownSelect'

import Constants from 'expo-constants';

const Row = (props) => 
(
    <View style={styles.container}>
      <View style={styles.item}
      >
      <Switch
        value={props.food.checked}
        onValueChange={props.onToggle}
      />
        <Text style={styles.title}>{props.food.name}</Text>
        <DropDownSelect 
          amount={props.food.amount} 
          unit={props.food.unit} 
          onFoodAmountUpdate={props.onFoodAmountUpdate}
          onFoodUnitUpdate={props.onFoodUnitUpdate}/>
        <View style={styles.rightContainer}>
          <Button color="#ff5c5c" 
            title='Remove'
            onPress={props.onDelete}/>
        </View>
      </View>
      <View>

      {(props.food.ref) && (<Text>Ref: {props.food.ref}</Text>)}
        
      </View>
    </View>
);



export default Row

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  item: {
    marginTop:0,
    backgroundColor: '#ffffff',
    marginVertical: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
  }
});

     