import React from "react";
import { View, Text, StyleSheet, SafeAreaView,Image,FlatList,TouchableOpacity } from "react-native";
import arrow from "../assets/img/arrow.png";
import cart from "../assets/img/cart.png";
import caNauLau from "../assets/img/ca_nau_lau.png";
import gaBoToi from "../assets/img/ga_bo_toi.png";
import xeCanCau from "../assets/img/xa_can_cau.png";
import doChoi from "../assets/img/do_choi_dang_mo_hinh.png";
import lanhDao from "../assets/img/lanh_dao_gian_don.png";
import hieuLongConTre from "../assets/img/hieu_long_con_tre.png";
import trump from "../assets/img/trump 1.png";
import ft1 from "../assets/img/ft1.png";
import ft2 from "../assets/img/ft2.png";
import ft3 from "../assets/img/ft3.png";
const FatList = () =>{
    const data = [
        {
            title:'Ca nấu lấu, nấu mì mini',
            nameShop:'Devang',
            img : caNauLau,
        },
        {
            title: '1KG khô gà bơ tỏi...',
            nameShop:'NTD shop',
            img : gaBoToi
        },
        {
            title: 'Xe cần cẩu đa năng',
            nameShop: 'Thế giới đồ chơi',
            img: xeCanCau
        },
        {
            title: 'Đồ chơi dạng mô hình',
            nameShop: 'Thế giới đồ chơi',
            img : doChoi
        },
        {
            title: 'Lãnh đạo giản đơn',
            nameShop: 'Minh Long Book',
            img: lanhDao
        },
        {
            title: 'Hiếu lòng con trẻ',
            nameShop: 'Minh Long Book',
            img: hieuLongConTre
        },
        {
            title: 'Donal Trump Thiên tài lãnh đạo',
            nameShop: 'Minh Long Book',
            img: trump
        }

    ]
    const renderItem = ({item}) => {
        return(
        <View style={{
            flexDirection: 'row',
            backgroundColor:'gray',
            margin: 2,
            height: 80,
        }}>
            <Image style={{
                height: '100%',
                width: 80,
            }} source={item.img}></Image>
            <View style={{
                height: 40,
                width: 180,
                margin: 10,

            }}>
                <Text>{item.title}</Text>
                <Text style={{color:'red', marginTop: 10}}>{item.nameShop}</Text>
            </View>
            <TouchableOpacity style={{
                backgroundColor:'red',
                height: 35,
                width: 60,
                marginTop: 20,
                justifyContent: 'center',
                alignItems: 'center',
                
            }}>
                <Text style={{color:'white'}}>Chat</Text>
            </TouchableOpacity>
        </View>
        )
    }
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
                <Text style={{
                    color: 'white',
                    fontSize: 20,
                }}>
                    Chat
                </Text>
                <Image style ={{
                    marginRight: 10
                }} source={cart}></Image>

            </View>
            <View style={{
                marginTop: 50,
                backgroundColor:'white',

            }}>
                <Text style={{
                    margin:20,
                }}>
                Bạn có thắc mắc với sản phẩm vừa xem đừng ngại chát với shop!
                </Text>
                <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.title}

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

export default FatList;