import axios from 'axios';

const API_URL = 'https://67180ab4b910c6a6e02aefed.mockapi.io/api/gk/jobs';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (todo) => {
  
  const response = await axios.post(API_URL,todo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};