
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const Item = ({ todo }) => {
  return (
     
        <TouchableOpacity 
        style={{borderWidth:1,borderRadius:4,height:35, overflow: 'hidden',flexWrap:'wrap',alignItems:'center', backgroundColor:'blue'}}
         >
         <Text style={{textAlign:'center',color:'white'}}>{todo.name}</Text>
        </TouchableOpacity>
         
        
    
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default Item;