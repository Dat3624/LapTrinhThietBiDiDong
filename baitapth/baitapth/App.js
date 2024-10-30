import { Text, SafeAreaView, StyleSheet, } from 'react-native';
import { Provider } from 'react-redux';
import store from './components/store/store'
// You can import supported modules from npm
import { Card } from 'react-native-paper';
import TodoApp from './components/todoApp'
// or any files within the Snack

export default function App() {
  return (
    <Provider store = {store}>
      <TodoApp/>
    </Provider>
  );
}

