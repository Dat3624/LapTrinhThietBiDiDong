import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function Screen_01({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#F9FAFB',
        paddingHorizontal: 15,
        paddingTop: 47,
      }}>
      <View
        style={{
          backgroundColor: '#926BE3',
          width: '100%',
          height: 400,
          alignItems: 'center',
          justifyContent: 'center',
          alignSelf: 'center',
          borderRadius: 10,
        }}>
        <Image
          source={require('../assets/image/de3_1.png')}
          style={{ width: '100%', height: 240 }}
        />
      </View>
      <View style={{ rowGap: 15 }}>
        <Text style={{ fontSize: 18, fontWeight: '700' }}>
          Boost Productivity
        </Text>
        <Text style={{ fontSize: 13, fontWeight: '400', color: '#C2C7CD' }}>
          Simplify tasks, boost productivity
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
        onPress={() => navigation.navigate('Screen_02')}>
        <Text style={{ color: '#fff', fontSize: 16, fontWeight: '500' }}>
          Sign up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Screen_03')}>
        <Text
          style={{
            color: '#000',
            fontSize: 16,
            fontWeight: '500',
            textAlign: 'center',
          }}>
          Login
        </Text>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          columnGap: 10,
        }}>
        <View style={styles.circle}></View>
        <View style={[styles.circle, { backgroundColor: '#25C3D9' }]}></View>
        <View style={styles.circle}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  circle: {
    width: 15,
    height: 15,
    borderWidth: 2,
    borderColor: '#25C3D9',
    borderRadius: 99,
  },
});
