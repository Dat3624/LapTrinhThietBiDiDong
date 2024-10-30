import React, { useEffect } from 'react';
import { View, FlatList } from 'react-native';
import { useRecoilState } from 'recoil';
import { todoState } from './ToDoAtom';
import { fetchTodos } from './API';
import TodoItem from './Item';
import AddTodo from './AddTodo'; 

const TodoList = () => {
  const [todos, setTodos] = useRecoilState(todoState);

  useEffect(() => {
    const getTodos = async () => {
      const data = await fetchTodos();
      setTodos(data);
    };
    getTodos();
  },[]);

  return (
    <View>
      <AddTodo /> 
      <FlatList
        data={todos}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <TodoItem todo={item} />}
         contentContainerStyle={{gap:10}}
      />
    </View>
  );
};

export default TodoList;