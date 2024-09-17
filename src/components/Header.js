import { StyleSheet, Text, View, Image, 
  Platform, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const Header = ({tempPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image source={require("../../assets/images/indir.png")} 
         style={styles.image}
         resizeMode='contain' />
      
      
      <CustomButton
        title="Giriş Yap"
        handleOnPress={tempPress}
        first={"#3498DB"}
        second={"gray"}
      />
      
      
      
        
    
    </SafeAreaView>
    
  )
}

export default Header

const styles = StyleSheet.create({
    container:{
      //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        position:'absolute',   
        top: 0, 
        width:'100%',
        height:70,
        borderBottomWidth:1,
        borderBottomColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#a5d3f1'
    },
    image:{
        
        height:50,
        width:'50%',
        margin:10
      }
})