import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import  Icon1  from 'react-native-vector-icons/Entypo';


const MenuTab = ({tempPress1,tempPress2,tempPress3}) => {
  return (
   <View style={styles.container}>
    <Pressable style={styles.button}
    onPress={tempPress1}>
      <Icon1 name='home' size={50} color={'white'}/>
      
    </Pressable>
    <Pressable style={styles.button}
    onPress={tempPress2}>
      <Icon1 name='message' size={50} color={'white'}/>
      
    </Pressable>
    <Pressable style={styles.button}
    onPress={tempPress3}>
      <Icon name='user' size={50} color={'white'}/>
      
    </Pressable>
   </View>
  )
}

export default MenuTab

const styles = StyleSheet.create({
  container:{
    flexDirection:'row',
    borderWidth:0,
    width:'100%',
    height:70,
    marginBottom:0,
    backgroundColor:'#1F91DC'
  },
  button:{
    borderWidth:0,
    flex:1,
    justifyContent:'center',
    alignItems:'center'

  }
})