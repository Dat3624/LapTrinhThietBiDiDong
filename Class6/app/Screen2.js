import React from "react";
import { View, Text, StyleSheet, SafeAreaView,Image,FlatList,TouchableOpacity, TextInput } from "react-native";
import arrow from "../assets/img/arrow.png";
import cart from "../assets/img/cart.png";
import ft1 from "../assets/img/ft1.png";
import ft2 from "../assets/img/ft2.png";
import ft3 from "../assets/img/ft3.png";
import loop from "../assets/img/loop.png";
const Screen2 = () =>{
    return(
        <SafeAreaView style={styles.container}>
            <View style={{
                position: 'absolute',
                top: 0,
                right: 0,
                left: 0,
                backgroundColor: 'rgba(27, 169, 255, 1)',
                height: 50,
                width: '100%',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginTop: 15,
            }}>
                <Image style={{
                    marginLeft: 10,
                }} source={arrow}></Image>
                <View style={{
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor: 'white',
                    
                    width: 200,
                    height: 30,
                    marginLeft: 10,
                }}>
                    <Image source={loop} style={{
                        height: 20,
                        width: 20,
                        marginLeft: 20,
                    }}></Image>
                <TextInput style={{
                    height : 30,
                    width: 200,
                    backgroundColor: 'white',
                    marginLeft: 10,
                }}>
            
                </TextInput>
                
                </View>
                <Image style ={{
                    marginRight: 10
                }} source={cart}></Image>
                <View style={{
                    flexDirection: 'row',
                    marginRight: 10,
                }}>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    height: 5,
                    width: 5,
                    borderRadius: 100,
                    marginRight: 2,
                }}>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    height: 5,
                    width: 5,
                    borderRadius: 100,
                    marginRight: 2,
                }}>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    backgroundColor: 'white',
                    height: 5,
                    width: 5,
                    borderRadius: 100,
                    marginRight: 10,
                }}>
                </TouchableOpacity>
                </View>
            </View>
            <View style={{
                marginTop: 50,
                backgroundColor:'white',

            }}>
                
                <FlatList
                // data={data}
                // renderItem={renderItem}
                // keyExtractor={(item) => item.title}

                />
                    

               
            </View>
            <View style = {{
                position: 'absolute',
                bottom: 0,
                right: 0,
                left: 0,
               backgroundColor: 'rgba(27, 169, 255, 1)',
               height: '8%',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-around',
                alignItems: 'center',
            }}>
                <Image source={ft1}></Image>
                <Image source={ft2}></Image>
                <Image source={ft3}></Image>    
            </View>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    }

})
export default Screen2;
