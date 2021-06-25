import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View ,Image} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import ReadStoryScreen from './screens/ReadStoryScreen';
import WriteStoryScreen from './screens/WriteStoryScreen';

export default class App extends React.Component{
  render(){
    return(
     <AppContainer/>

     
    )
     
    
  }
}

const TabNavigator = createBottomTabNavigator({
  WriteStory: WriteStoryScreen,
  ReadStory: ReadStoryScreen,
},
{
  defaultNavigationOptions: ({navigation}) => ({
  tabBarIcon:({})=>{
  const routeName = navigation.state.routeName;
  if(routeName=== "ReadStory"){

return(
  <Image source = {require('./assets/read.png')}
  style = {{width:20, height:30}}/>
) }else if(routeName==="WriteStory"){
  return(
    <Image source = {require('./assets/write.png')}
    style = {{width:20, height:30}}/>
 
  )
  }
  }
})
});



const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
