import { StatusBar } from 'expo-status-bar';

import React from 'react';
import { StyleSheet, Text, View ,Image, Button,} from 'react-native';
import{TextInput} from'react-native-gesture-handler'
import {Header} from 'react-native-elements';
import db from '../config'
import firebase from 'firebase'


export default class WriteStoryScreen extends React.Component{
constructor(){
super();
render(){
return(
            <View>
                <Text>
                    Story Hub
                </Text>

                
            </View>
        )
    }

}
}
<View style={styles.container}>
            <View>
          
                
                style={{width:200, height: 200}}
              <Text style={{textAlign: 'center', fontSize: 30}}>Story Hub</Text>
            </View>

            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Story Title"
              onChangeText = {text=>this.setState({StoryTitle:text})}
              />
           
              
           
            <View style={styles.inputView}>
            <TextInput 
              style={styles.inputBox}
              placeholder="Author"
              onChangeText = {text=>this.setState({Author:text})}
              />
            
            </View>

            <TouchableOpacity 
            style = {styles.submitButton}
            onPress={this.submitStory}
        
             
              >
                <Text style = {styles.ButtonText}>Submit</Text>
            </TouchableOpacity>

          </View>
        </View>
