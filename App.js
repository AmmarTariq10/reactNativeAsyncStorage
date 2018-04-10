import React from 'react';
import { StyleSheet, Text, View, TextInput  } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style = {styles.save}>
      {this.state.myKey}
      </Text>
      <View> <TextInput style={styles.formInput} onTextChanged={(text)=>{this.saveData(text)}} value=""/> </View>
      <Text style={styles.instruction}> Type something and check if it remains in storage </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding:30,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  instruction:{
    textAlign: 'center',
    color:'#333333',
    marginBottom: 5,
    marginTop: 5,
  },
  formInput:{
    flex:1,
    height:30,
    fontSize: 15,
    borderColor: '#555555',
    borderWidth:1
  }
});
