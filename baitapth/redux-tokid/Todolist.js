import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, setLoading, fetchTodo } from './TodoSlice';
import { View, Text, Button, FlatList, TextInput, ActivityIndicator } from 'react-native';
import axios from 'axios';

const TodoList = () => {
    const dispatch = useDispatch();
    const { todos, loading } = useSelector((state) => state.todos);
    const [newTodo, setNewTodo] = useState('');

    const handleGetTodo = async () => {
        dispatch(setLoading(true)); 
        try {
            const res = await axios.get("https://66fc9741c3a184a84d176b30.mockapi.io/bai1");
            if (res && res.status === 200) {
                dispatch(fetchTodo(res.data)); 
            }
        } catch (error) {
            console.error('Error fetching todos:', error);
        } finally {
            dispatch(setLoading(false)); 
        }
    };
    const callAddTodo = async ()=>{
        dispatch(setLoading(true)); 
        const res = await axios.post("https://66fc9741c3a184a84d176b30.mockapi.io/bai1", {
            title: newTodo, 
        });
        if(res && res.status===201){
            handleGetTodo();
        }
    }
    const handleAddTodo = () => {
        if (newTodo.trim()) {
            callAddTodo()
            setNewTodo('');
        }
    };
    useEffect(() => {
        handleGetTodo();
    }, []);
    return (
        <View style={{ padding: 20 }}>
            <TextInput
                placeholder="Add a todo"
                value={newTodo}
                onChangeText={setNewTodo}
                style={{ borderWidth: 1, padding: 10, marginBottom: 10 }}
            />
            <Button title="Add" onPress={handleAddTodo} />
            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" />
            ) : (
                <FlatList
                    data={todos}
                    keyExtractor={(item) => item.id.toString()} 
                    renderItem={({ item }) => <Text>{item.title}</Text>} 
                />
            )}
        </View>
    );
};

export default TodoList;