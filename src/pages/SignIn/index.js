import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import { useNavigation } from '@react-navigation/native';
import { auth } from '../../firebase.config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default function SignIn() {

  const [userMail, setUserMail] = useState('')
  const [userPass, setUserPass] = useState('')

  function userLogin(){
    signInWithEmailAndPassword(auth, userMail, userPass)
      .then((userCredential) => {
        alert("Login efetuado!");
        navegar.navigate('Home')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage)
      }
      )
  }

  const navegar = useNavigation();

 return (
   <View style = {styles.container}>

    <Text style = {styles.title}>FAZER LOGIN</Text>
    <TextInput style = {styles.input}
      placeholder="e-mail*"
      keyboardType='email-address'
      autoCapitalize='none'
      autoComplete='email'
      value = {userMail}
      onChangeText = {setUserMail}
    />

    <TextInput style = {styles.input}
      placeholder='senha*'
      autoCapitalize='none'
      secureTextEntry
      value = {userPass}
      onChangeText = {setUserPass}
    />

    <TouchableOpacity activeOpacity={0.7} style = {styles.formButton} onPress={userLogin}>
      <Text style = {styles.textButton}>Entrar</Text>
    </TouchableOpacity>

    <View style ={styles.subContainer}>

      <TouchableOpacity activeOpacity={0.7} style = {styles.subButton}>
        <Text style = {styles.subTextButton}>Cadastrar-se</Text>
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.7} style = {styles.subButton}>
        <Text style = {styles.subTextButton}>Esqueci a senha</Text>
      </TouchableOpacity>

    </View>

   </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: "#0C1F3F",
    alignItems: 'center',
    justifyContent: 'center'
  },
  title:{
    fontSize: 24,
    fontWeight: 'bold',
    color: "#FFF",
    padding: 16,
  },
  input:{
    margin: 8,
    backgroundColor: "#afadae",
    borderColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    height: '6%',
    width: '60%',
    padding: 8,
    fontSize: 10
  },
  formButton:{
    marginTop: 10,
    backgroundColor: "#99ffff",
    borderColor: "#FFF",
    borderRadius: 10,
    borderWidth: 2,
    height: '4%',
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textButton:{
    color: "#000",
    fontSize: 12,
    fontWeight: '600'
  },
  subContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: "48%"
  },
  subButton:{
    paddingTop: 6,
  },
  subTextButton:{
    fontSize: 10,
    color: "#FFF"
  },

})