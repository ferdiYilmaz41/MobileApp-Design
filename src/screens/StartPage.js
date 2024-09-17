import {
  StyleSheet, Text, View, SafeAreaView,
  Platform, StatusBar
} from 'react-native'
import React from 'react'
import Header  from '../components/Header'

const StartPage = ({navigation}) => {
  return (

    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      <Header 
      tempPress={() => navigation.navigate('Login')}/>

      <Text>Hyundai Hip</Text>
    </SafeAreaView>


  )
}

export default StartPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    alignItems: 'center',
    justifyContent: 'center',
  }
})