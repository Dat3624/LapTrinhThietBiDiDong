import React from "react";
import { useState } from "react";
import { View, Text, StyleSheet,TextInput,TouchableOpacity,Image } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';

export default function  Bai2a(){
    const [show,setShow] = useState(false);
    
    return(
        <LinearGradient colors={['rgba(251, 203, 0, 1)','rgba(191, 154, 0, 1)']}
        style={{flex:100,width:'100%'}}
        >
            <View style={{
                flex:30,
                justifyContent: 'center',
                }}>
                <Text style={{fontSize:30,fontWeight:"bold"}}>LOGIN</Text>
            </View>            
            <View style={{
                flex:40
            }}>
                <TextInput style={styles.input}>Name</TextInput>
                <View>
                <TextInput style={styles.input} secureTextEntry={!show?'text':'password'}>Password</TextInput>
                <TouchableOpacity style={{
                        position:'absolute',
                        right:20,
                        top:23
                    }} onPress={()=>{
                        setShow(!show)
                    }}>
                        <Image source={require('../../img/Group.png')}style={{
                            width:50,
                            height:35,
                
                        }}/>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity style={{
                    margin:20,
                    height:60,
                    backgroundColor:'black'
                }}>
                    <Text style={{
                        color:'white',
                        fontSize:25,
                        fontWeight:'bold',
                        textAlign:'center',
                        margin:15
                    }}>Login</Text>                    
                </TouchableOpacity>
            </View>
            <View style={{
                flex:30
            }}>
                <Text style={{
                    fontSize:20,
                    textAlign:'center',
                    fontWeight:'bold',
                }}>Forgot your password?</Text>
            </View>
        </LinearGradient>
    );
}
 const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f5fcff',

    },
    text: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    input:{
        padding:10,
        borderWidth:1,
        borderColor:'white',
        margin:10,
        height:60,
        fontSize:20,
    }
 })