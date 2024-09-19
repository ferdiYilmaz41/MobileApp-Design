import { StyleSheet, Text, View, Image, 
  Platform, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'
import CustomButton from './CustomButton'

const Header = ({tempPress}) => {
  return (
    <SafeAreaView style={styles.container}>
      
      <Image source={require("../../assets/images/yeniLogo.png")} 
         style={styles.image}
         resizeMode='contain' />
      
      
      <CustomButton
        title="Giriş Yap"
        handleOnPress={tempPress}
        first={"#1F91DC"}
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
        borderBottomWidth:0,
        borderBottomColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor:'#1F91DC'
    },
    image:{
        
        height:70,
        width:300,
        marginBottom:10
      }
})