import { createSlice } from '@reduxjs/toolkit';
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    fetchTodo:(state,action)=>{
      state.todos = action.payload;
    }
  },
});

export const { addTodo, setLoading,fetchTodo } = todoSlice.actions;
export default todoSlice.reducer;