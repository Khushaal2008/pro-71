import React from 'react';
import { StyleSheet, Text, View,TextInput,TouchableOpacity } from 'react-native';
import firebase from 'firebase';
import db from '../Config'

export default class WriteScreen extends React.Component{
  constructor()
  {
    super();
    this.state={
      title: '',
      author: '',
      story: ''
    }
  }

submitButton = async() => {
db.collection("Story").add({
  title:this.state.title,
  author:this.state.author,
  story:this.state.story
})

}

    render()
    {
        return(
            <View style={styles.container}>

            <View>
            <TextInput
style={styles.inputBox}
placeholder = "Name Of the Story" 
onChangeText= {(text)=>{
                        this.setState({
                            title: text
                        })
                    }}
value={this.state.title}
/>

<TextInput
style={styles.inputBox}
placeholder = "Author Of the Story"
onChangeText= {(text)=>{
                        this.setState({
                            author:text
                        })
                    }}
value={this.state.author}
/>

<TextInput
style={styles.storyWritingInput}
onChangeText= {(text)=>{
                        this.setState({
                            story:text
                        })
                    }}
value={this.state.story}
placeholder = "Write A Story"
/>
            </View>


<TouchableOpacity style={styles.button} onPress={this.submitButton}>
    <Text style={styles.buttonText}>Submit</Text>
</TouchableOpacity>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor:'blue'
    },
     inputBox:{
      width: 200,
      height: 40,
      borderWidth: 2.5,
      borderRightWidth: 2.5,
      fontSize: 19,
      marginBottom:50,
      backgroundColor:'yellow',
      textAlign:"center"
    },

    storyWritingInput:{
width: 300,
      height: 150,
      borderWidth: 2.5,
      borderRightWidth: 2.5,
      fontSize: 15,
      marginBottom:50,
      backgroundColor:'white',
    },
     
     button:{
backgroundColor:'#df123d',
width:100,
height:50,
borderRadius:50,
borderColor:"yellow"
     },
     buttonText:{
      fontSize: 15,
      textAlign: 'center',
      marginTop: 10
    },
   
  
  });