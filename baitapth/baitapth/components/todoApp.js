import {View,Button,TextInput,Text,SafeAreaView,FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
export default function TodoApp(){
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(state => state.jobs);
  const [newJob, setNewJob] = useState({ id: '', name: '' });

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS_REQUEST' });
  }, [dispatch]);

  const handleCreateJob = () => {
    dispatch({ type: 'CREATE_JOB_REQUEST', payload: newJob });
    setNewJob({ id: '', name: '' });
  };

  const handleDeleteJob = (id) => {
    dispatch({ type: 'DELETE_JOB_REQUEST', payload: id });
  };

  return(
    <SafeAreaView style={{flex:1}}>
    <Text style={{backgroundColor:'blue',color:'white',fontSize:25,fontWeight:'bold',textAlign:'center'}}>To do App</Text>
    
    
    <View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Button title="Delete" onPress={() => handleDeleteJob(item.id)} />
          </View>
        )}
      />
      <TextInput style={{height:30,borderWidth:1,borderRadius:7,marginHorizontal:30,marginVertical:10,color:'gray'}}
        placeholder="id"
        value={newJob.id}
        onChangeText={(text) => setNewJob({ ...newJob, id: text })}
      />
      <TextInput
      style={{height:30,borderWidth:1,borderRadius:7,marginHorizontal:30,marginVertical:10,color:'gray'}}
        placeholder="name"
        value={newJob.name}
        onChangeText={(text) => setNewJob({ ...newJob, name: text })}
      />
      <Button title='ADD' onPress={handleCreateJob}></Button>

    </View>
    </SafeAreaView>
    
  )
}