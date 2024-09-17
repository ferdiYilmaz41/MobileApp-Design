import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const CustomButton = ({ title, handleOnPress,first, second }) => {
  return (
    
      <Pressable
      onPress={handleOnPress}
      style={({ pressed }) => [{
        backgroundColor: pressed ? second : first
      }, styles.buttonStyle]}>
      <Text style={styles.textStyle}>
        {title}
      </Text>
    </Pressable>
    
    
  )
}

export default CustomButton

const styles = StyleSheet.create({
  container: {

    borderWidth: 1
  },
  buttonStyle: {
    borderWidth:2,
        width: 100,
        height: 50,
        borderRadius: 20,
        margin: 10,
        alignItems: 'center'
        ,justifyContent: 'center'
    
    //backgroundColor: '#3498DB',
    
  },
  textStyle: {
    //marginTop: 10,
    color: 'white',
    fontSize: 19,
    fontWeight: 'bold'
  }
})