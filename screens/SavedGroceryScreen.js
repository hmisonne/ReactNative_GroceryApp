import React from 'react';
import { Button, Text, View, Image, StyleSheet,ScrollView, TouchableOpacity } from 'react-native';
import {connect} from 'react-redux'
import {removeGroceryList} from '../redux/actions'

class SavedGroceryScreen extends React.Component {
  static navigationOptions = ({navigation}) => {
    return {
      headerTitle: 'My saved lists',
    };
  }


  goToSelectSavedGList = (listG) => {
    this.props.navigation.navigate('SavedGroceryDetails', listG)
  }

 render(){
      const groceryNameLoaded = this.props.navigation.getParam('nameGroceryLoaded')
     return(  
      <View style = {styles.container}>


      {groceryNameLoaded && (
        <Text style = {styles.alertSuccess}>{groceryNameLoaded} added to my SHopping List !</Text>
        )
      }
       <ScrollView>
        {(this.props.groceryList.length === 0)? 
        (
          <View>
          <Text style = {styles.title}>No Grocery List Saved yet</Text>
          </View>
        )
        :
        (
        this.props.groceryList.map(listG => (
        <TouchableOpacity key = {listG.key} style = {styles.item}
           onPress= {() => this.goToSelectSavedGList(listG)}>
          <View style = {styles.element}>
            <Text style = {styles.title}> {listG.name} : {listG.description}</Text>
            <Button title="Remove" color="#ff5c5c" onPress={() => this.props.removeGroceryList(listG.key)}/>
          </View>     
        </TouchableOpacity>
      ))
      
      
          )
        
      }


      </ScrollView>
      </View>
    )
  }
  
} 
const mapStateToProps = state => ({
  groceryList: state.groceryList,
})


export default connect(mapStateToProps, {removeGroceryList: removeGroceryList})(SavedGroceryScreen)


const styles = StyleSheet.create({
  element :{
      flexDirection: 'row',
      justifyContent: 'space-between',
      margin: 20
    },
  container: {
    flex: 1,
    marginHorizontal: 5,
  },
  item: {
    marginTop:0,
    backgroundColor: '#ffffff',
    marginVertical: 8,
  },
  rightContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
   alertSuccess: {
    backgroundColor: '#bbedbf',
    textAlign: "center",
  },
  title: {
    fontSize: 18,
    flex: 1,
    flexWrap: 'wrap',
  }
});

