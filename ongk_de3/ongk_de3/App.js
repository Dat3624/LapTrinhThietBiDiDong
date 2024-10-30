import { Text, SafeAreaView, StyleSheet } from 'react-native';
import Screen_01 from './Screens/Screen_01';
import Screen_02 from './Screens/Screen_02';
import Screen_03 from './Screens/Screen_03'
import Screen_04 from './Screens/Screen_04'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Screen_01" component={Screen_01} />
        <Stack.Screen name="Screen_02" component={Screen_02} />
        <Stack.Screen name="Screen_03" component={Screen_03} />
        <Stack.Screen name="Screen_04" component={Screen_04} />
      </Stack.Navigator>
    </NavigationContainer>
  );

  // return <Screen_04 />;
}

const styles = StyleSheet.create({});
