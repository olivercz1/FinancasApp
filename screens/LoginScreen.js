import React,{useEffect, useState} from 'react';
import {StyleSheet,Text,View,Button,Alert, NativeEventEmitter} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';




export default LoginScreen =({navegation}) => {
    const [username,setUsername] = useState ('')
    const [password,setpassword] = useState ('')
    
    useEffect (()=>{
        const checkLoginStatus = async () =>{
            const LoggedIn = await Storage.getItem('loggedIn');
            if (LoggedIn === 'true'){
                navegation.replace('Home')
            }
        }
        checkLoginStatus();
    },[])


    const handleLogin = async () => {
        if (username === 'admin' && password === '1234') {
            await AsyncStorage.setItem('LoggedIn','true');
            navegation.replace('Home'); //Navega para a Home
        }else{
            alert.alert('Erro', 'Usuario ou senha Inválidos!')
        }
    }
    
    return (
        <View style={styles.container}>
          <Text>TELA LOGIN</Text>
          <StatusBar style="auto" />
        </View>
    );
}
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

