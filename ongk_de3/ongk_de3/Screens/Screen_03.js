import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { useState } from 'react';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function Screen_03({ navigation, route }) {
  const { updatedUsers } = route.params || {};
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (!email || !password) {
      Alert.alert('Login Failed', 'Please enter both email and password.');
      return;
    }

    if (!updatedUsers || updatedUsers.length === 0) {
      Alert.alert('No users found', 'Please register first.');
      return;
    }

    const userExists = updatedUsers.some(
      (user) => user.email === email && user.password === password
    );

    if (userExists) {
      navigation.navigate('Screen_04');
    } else {
      Alert.alert(
        'Login Failed',
        'Email or password is incorrect. Please try again.'
      );
    }
  };

  return (
    <View
      style={{
        flex: 1,
        paddingTop: 47,
      }}>
      <Image
        source={require('../assets/image/de3_3.png')}
        style={{ width: '100%', height: 180 }}
      />
      <View
        style={{
          backgroundColor: '#F9FAFB',
          paddingHorizontal: 15,
          borderRadius: 10,
          width: '100%',
          flex: 1,
          rowGap: 50,
        }}>
        <Text style={{ fontSize: 30, fontWeight: '500' }}>Welcome!</Text>
        <View style={{ rowGap: 15 }}>
          <View style={{ rowGap: 7 }}>
            <Text style={styles.text}>Email</Text>
            <View style={styles.containerInput}>
              <MaterialCommunityIcons
                name="email-outline"
                size={20}
                color="black"
              />
              <TextInput
                placeholder={'Enter email'}
                style={styles.input}
                value={email}
                onChangeText={setEmail}
              />
            </View>
          </View>
          <View style={{ rowGap: 7, paddingBottom: 50 }}>
            <Text style={styles.text}>Password</Text>
            <View style={styles.containerInput}>
              <MaterialIcons name="lock-open" size={20} color="black" />
              <TextInput
                placeholder={'Enter password'}
                style={styles.input}
                secureTextEntry={!isPasswordVisible}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                onPress={() => setIsPasswordVisible(!isPasswordVisible)}>
                <FontAwesome
                  name={isPasswordVisible ? 'eye' : 'eye-slash'}
                  size={20}
                  color="black"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#25C3D9',
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleLogin}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
            Login
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    borderRadius: 5,
    backgroundColor: '#EFF1F4',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 50,
  },
  input: {
    width: '100%',
    height: 40,
    paddingLeft: 15,
    color: '#D0D4DA',
    fontSize: 14,
    fontWeight: '500',
  },
  text: {
    color: '#000',
    fontSize: 14,
    fontWeight: '600',
  },
});
