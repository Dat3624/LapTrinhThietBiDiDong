import {View,Button,TextInput,Text,SafeAreaView,FlatList} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
export default function TodoApp(){
  const dispatch = useDispatch();
  const { jobs, loading, error } = useSelector(state => state.jobs);
  const [newJob, setNewJob] = useState({ title: '', body: '' });

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS_REQUEST' });
  }, [dispatch]);

  const handleCreateJob = () => {
    dispatch({ type: 'CREATE_JOB_REQUEST', payload: newJob });
    setNewJob({ title: '', body: '' });
  };

  const handleDeleteJob = (id) => {
    dispatch({ type: 'DELETE_JOB_REQUEST', payload: id });
  };

  return(
    <SafeAreaView style={{flex:1}}>
    <Text style={{backgroundColor:'blue',color:'white',fontSize:25,fontWeight:'bold',textAlign:'center'}}>To do App</Text>
    <TextInput style={{height:30,borderWidth:1,borderRadius:7,marginHorizontal:30,marginVertical:10,color:'gray'}} value='text todo' ></TextInput>
    <Button title='ADD' onPress={handleCreateJob}></Button>
    <View>
      {loading && <Text>Loading...</Text>}
      {error && <Text>{error}</Text>}
      <FlatList
        data={jobs}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Button title="Delete" onPress={() => handleDeleteJob(item.id)} />
          </View>
        )}
      />
      <TextInput
        placeholder="Title"
        value={newJob.title}
        onChangeText={(text) => setNewJob({ ...newJob, title: text })}
      />
      <TextInput
        placeholder="Body"
        value={newJob.body}
        onChangeText={(text) => setNewJob({ ...newJob, body: text })}
      />

    </View>
    </SafeAreaView>
    
  )
}