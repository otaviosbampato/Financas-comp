import React from 'react'
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

import * as Animatable from 'react-native-animatable'

import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const navigation = useNavigation();

 return (
   <View style = {styles.container}>

    <View style = {styles.containerLogo}>
      
      <Animatable.Image
        animation = "zoomIn"
        source={require('../../assets/imagetoExp.png')}
        style = {{width: '45%'}}
        resizeMode = "center"
        
      />
    </View>

    <Animatable.View 
      delay = {800} 
      animation ="fadeInUp" 
      style = {styles.containerForm}>

        <Text style = {styles.title}>Comp-finanças!</Text>
        <Text style = {styles.text}>Faça o login para começar</Text>

        <TouchableOpacity style = {styles.button} onPress={() => navigation.navigate('SignIn') }>
          <Text style = {styles.buttonText}>Começar</Text>
        </TouchableOpacity>

    </Animatable.View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#0C1F3F",
  },
  containerLogo:{
    flex: 2,
    backgroundColor: "#0C1F3F",
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerForm:{
    flex: .8,
    backgroundColor: "#FFF",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center'
  },
  title:{
    color: "#282828",
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 14,
    marginBottom: 4
  },
  text:{
    fontSize: 14,
    color: "#9a9a9a"
  },
  button:{
    backgroundColor: "#0C1F3F",
    borderRadius: 30,
    width: 130,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40
  },
  buttonText:{
    color: "#FFF",
    fontSize: 20,
  },
})