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

const RowInstructions = (props) => 
(
    <View style={styles.item}>
      <Text>{props.instruction.number}: {props.instruction.step}</Text>
    </View>
);



export default RowInstructions

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

