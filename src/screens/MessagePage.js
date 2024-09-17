import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MenuTab from '../components/MenuTab'



const MessagePage = ({navigation}) => {
  return (
    <View style={styles.container}>
        <View style={styles.menuStyle}>
            <MenuTab
            tempPress1={()=>navigation.navigate('Home')}
            tempPress2={()=>navigation.navigate('Message')}
            tempPress3={()=>navigation.navigate('Profile')}
            />
        </View>
    </View>
  )
}

export default MessagePage

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
    menuStyle:{
        position:'absolute',
        bottom:0,
        left:0,
        right:0,
        padding:0,
        alignItems:'center'
    }
})