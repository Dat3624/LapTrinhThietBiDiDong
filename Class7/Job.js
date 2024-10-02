import {useEffect, useState} from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { FlatList } from 'react-native';
import axios from 'axios';
export default function Job(){

const [jobs, setJobs] = useState([]);
const [error, setError] = useState(null);
const fetchAPI = async ()=>{
   try{
    const response = await axios.get('https://66fc9083c3a184a84d1753b4.mockapi.io/api/job/job');
    setJobs(response.data);
    setError(null);
   }catch(err){
       setError(err);
       setJobs([]);
   }
}
useEffect(() => {
    fetchAPI();
}, [])
const Job = ({item})=>{
    return(
    <View style={{
        margin: 10,
        width: '100%',
        height: 20,
        flexDirection: 'row',
        justifyContent: 'space-around',
        backgroundColor: 'lightgray',
    }}>
        <Text>
            {item.name}
        </Text>
        <Text>
            {item.salary}
        </Text>
    </View>
)
}
    return(
        <SafeAreaView>
            <View style={{
            marginTop: 10,
                }}>
                    <Text style={{
                        fontSize: 20,
                        textAlign: 'center',
                        fontWeight: 'bold',
                    }}>
                        List job
                    </Text>
            </View>
            <View style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            marginTop: 30,
            width: '100%',
            height: 160,   
             }}>
                <TouchableOpacity style={styles.button}>
                    <Text>
                     Add job
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                    <Text>
                        Delete job
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button}>
                        <Text>
                            Edit job
                        </Text>
                </TouchableOpacity>
            </View>
            <View style={{
                marginTop: 10,
                marginLeft: 40,
                height: 1000,
                justifyContent: 'center',
                alignItems: 'center',
                width: '80%',
                borderWidth: 1,
            }}>
            <FlatList
            data={jobs}
            renderItem={Job}
            keyExtractor={(item)=>item.id}
            />
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    button:{
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'lightblue',
        borderRadius: 5,
        margin: 10,
        width: 200,
        height: 40,
    }
})