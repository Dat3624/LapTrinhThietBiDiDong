import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

export default function Screen_02({ navigation }) {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [users, setUsers] = useState([]);

  const handleContinue = () => {
    const newUser = { userName, email, password };
    setUsers((prevUsers) => {
      const updatedUsers = [...prevUsers, newUser];
      navigation.navigate('Screen_03', { updatedUsers });
    });
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 15,
        paddingTop: 47,
      }}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="arrowleft" size={24} color="black" />
      </TouchableOpacity>
      <View
        style={{
          alignSelf: 'center',
          alignItems: 'center',
          paddingVertical: 50,
        }}>
        <Image
          source={require('../assets/image/de3_2.png')}
          style={{ width: 90, height: 90 }}
        />
        <Text style={{ fontSize: 30, fontWeight: '500' }}>Nice to see you</Text>
        <Text style={{ fontSize: 16, fontWeight: '400', color: '#D0D4DA' }}>
          Create your account
        </Text>
      </View>
      <View style={{ rowGap: 25 }}>
        <View style={styles.containerInput}>
          <FontAwesome6 name="user" size={20} color="black" />
          <TextInput
            placeholder={'Enter your user name'}
            style={styles.input}
            value={userName}
            onChangeText={setUserName}
          />
        </View>
        <View style={styles.containerInput}>
          <MaterialCommunityIcons
            name="email-outline"
            size={20}
            color="black"
          />
          <TextInput
            placeholder={'Enter your email address'}
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />
        </View>
        <View style={styles.containerInput}>
          <MaterialIcons name="lock-open" size={20} color="black" />
          <TextInput
            placeholder={'Enter your password'}
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
        <View>
          <Text>
            I agree with{' '}
            <Text style={{ color: '#7BBBED' }}>Terms & Conditions</Text>
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: '#25C3D9',
            height: 50,
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={handleContinue}>
          <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
            Continue
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  containerInput: {
    flexDirection: 'row',
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#D0D4DA',
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
  },
});
