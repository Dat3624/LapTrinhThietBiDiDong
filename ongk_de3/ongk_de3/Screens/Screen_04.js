import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

const data = [
  {
    id: 1,
    uri: require('../assets/image/de3_42.png'),
    colorBg: '#F1EFF9',
    price: 3.13,
    star: 4.1,
    name: 'Sweet Candy',
  },
  {
    id: 2,
    uri: require('../assets/image/de3_44.png'),
    colorBg: '#EDF1F9',
    price: 5.13,
    star: 4.3,
    name: 'Orrange',
  },
  {
    id: 3,
    uri: require('../assets/image/de3_4.png'),
    colorBg: '#F7EFF0',
    price: 2.99,
    star: 4.5,
    name: 'Donut',
  },
  {
    id: 4,
    uri: require('../assets/image/de3_43.png'),
    colorBg: '#F7EFF1',
    price: 7.13,
    star: 4.7,
    name: 'Cherry',
  },
];

export default function Screen_04({ navigation }) {
  const [product, setProduct] = useState(data[0]);
  const [size, setSize] = useState('');
  const [quantity, setQuantity] = useState(0);
  const [total, setTotal] = useState(0);

  const hanldeTotal = (newQuantity) => {
    setTotal(newQuantity * product.price);
  };
  const handleIncrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = prevQuantity + 1;
      hanldeTotal(newQuantity);
      return newQuantity;
    });
  };
  const handleDecrease = () => {
    setQuantity((prevQuantity) => {
      const newQuantity = Math.max(prevQuantity - 1, 0);
      hanldeTotal(newQuantity);
      return newQuantity;
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
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          columnGap: 20,
          paddingBottom: 10,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <Text style={{ fontSize: 20, fontWeight: '500' }}>{product.name}</Text>
      </View>
      <View style={{ rowGap: 7 }}>
        <View
          style={{
            backgroundColor: `${product.colorBg}`,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 10,
          }}>
          <Image
            source={product.uri}
            style={{ height: 250, width: '100%', objectFit: 'contain' }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#F1EFF9',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '23%',
                height: 75,
              },
              product.name === 'Sweet Candy' && styles.active,
            ]}
            onPress={() => setProduct(data[0])}>
            <Image
              source={require('../assets/image/de3_42.png')}
              style={{ height: 60, width: '100%', objectFit: 'contain' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#EDF1F9',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '23%',
                height: 75,
              },
              product.name === 'Orrange' && styles.active,
            ]}
            onPress={() => setProduct(data[1])}>
            <Image
              source={require('../assets/image/de3_44.png')}
              style={{ height: 60, width: '100%', objectFit: 'contain' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#F7EFF0',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '23%',
                height: 75,
              },
              product.name === 'Donut' && styles.active,
            ]}
            onPress={() => setProduct(data[2])}>
            <Image
              source={require('../assets/image/de3_4.png')}
              style={{ height: 60, width: '100%', objectFit: 'contain' }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              {
                backgroundColor: '#F7EFF1',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 10,
                width: '23%',
                height: 75,
              },
              product.name === 'Cherry' && styles.active,
            ]}
            onPress={() => setProduct(data[3])}>
            <Image
              source={require('../assets/image/de3_43.png')}
              style={{ height: 60, width: '100%', objectFit: 'contain' }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ rowGap: 10, paddingTop: 20 }}>
        <View
          style={{ flexDirection: 'row', columnGap: 15, alignItems: 'center' }}>
          <Text style={{ color: '#25C3D9', fontSize: 30, fontWeight: '700' }}>
            {product.price.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </Text>
          <View
            style={{
              backgroundColor: '#F7EFF0',
              width: 100,
              height: 27,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 20,
            }}>
            <Text style={{ color: '#EAA5A8', fontSize: 14, fontWeight: '500' }}>
              Buy 1 get 1
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{ fontSize: 20, fontWeight: '500' }}>
              {product.name}
            </Text>
            <Text style={{ fontSize: 14, fontWeight: '500', color: '#B6BBC1' }}>
              Occaecat est deserunt tempor offici
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 7,
              alignItems: 'center',
            }}>
            <FontAwesome name="star" size={24} color="#EFCB5B" />
            <Text style={{ fontSize: 16, fontWeight: '500' }}>
              {product.star}
            </Text>
          </View>
        </View>
      </View>
      <View style={{ rowGap: 10, paddingTop: 25 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Size</Text>
        <View style={{ flexDirection: 'row' }}>
          <TouchableOpacity
            style={[
              styles.size,
              { borderTopLeftRadius: 10, borderBottomLeftRadius: 10 },
              size === 'XS' && styles.activeSize,
            ]}
            onPress={() => setSize('XS')}>
            <Text style={size === 'XS' && styles.activeSizeText}>XS</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.size, size === 'S' && styles.activeSize]}
            onPress={() => setSize('S')}>
            <Text style={size === 'S' && styles.activeSizeText}>S</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.size, size === 'M' && styles.activeSize]}
            onPress={() => setSize('M')}>
            <Text style={size === 'M' && styles.activeSizeText}>M</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.size, size === 'L' && styles.activeSize]}
            onPress={() => setSize('L')}>
            <Text style={size === 'L' && styles.activeSizeText}>L</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.size,
              { borderTopRightRadius: 10, borderBottomRightRadius: 10 },
              size === 'XL' && styles.activeSize,
            ]}
            onPress={() => setSize('XL')}>
            <Text style={size === 'XL' && styles.activeSizeText}>XL</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ rowGap: 10, paddingTop: 25 }}>
        <Text style={{ fontSize: 16, fontWeight: '500' }}>Quantity</Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <View
            style={{
              flexDirection: 'row',
              columnGap: 10,
              alignItems: 'center',
            }}>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#D6D7D8' }]}
              onPress={handleDecrease}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#000' }}>
                -
              </Text>
            </TouchableOpacity>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#86888C' }}>
              {quantity}
            </Text>
            <TouchableOpacity
              style={[styles.btn, { backgroundColor: '#25C3D9' }]}
              onPress={handleIncrease}>
              <Text style={{ fontSize: 16, fontWeight: '500', color: '#fff' }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              columnGap: 10,
            }}>
            <Text style={{ fontSize: 16, fontWeight: '500', color: '#86888C' }}>
              Total
            </Text>
            <Text style={{ fontSize: 20, fontWeight: '500', color: '#000' }}>
              {total.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  active: {
    borderWidth: 1,
    borderColor: '#25C3D9',
  },
  size: {
    width: 50,
    height: 40,
    borderWidth: 1,
    borderColor: '#C6C9CF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  activeSize: {
    backgroundColor: '#25C3D9',
  },
  activeSizeText: {
    color: '#fff',
  },
  btn: {
    height: 30,
    width: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 99,
  },
});
