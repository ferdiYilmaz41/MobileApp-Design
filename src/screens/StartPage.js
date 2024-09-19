import {
  StyleSheet, Text, View, SafeAreaView,
  Platform, StatusBar, ScrollView,
  Touchable,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import Header from '../components/Header'
import Slider from '../components/Slider'
import Medya from '../components/Medya'
import Models from '../components/Models'

const StartPage = ({ navigation }) => {
  return (

    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollStyle}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <View style={styles.header}>
        <Header
          tempPress={() => navigation.navigate('Login')} />
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.secondHeaderText}>
          Öne Çıkanlar
        </Text>
      </View>
      <View style={styles.slider}>
        <Slider/>
      </View>
      <View style={styles.secondHeader}>
        <Text style={styles.secondHeaderText}>
          Haberler
        </Text>
      </View>
      <View style={styles.secondHeaderContext}>
        <Medya/>
      </View>
      
      <View style={styles.secondHeader}>
        <Text style={styles.secondHeaderText}>
          Modellerimiz
        </Text>
      </View>
      
      <View style={styles.thirdHeaderContext}>
        <Models/>
        <View style={{
          height:30,
          borderWidth:0,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <TouchableOpacity >
          <Text style={{backgroundColor:'#808080', 
            color:'white', borderRadius:10,
            fontSize:20, paddingLeft:10, paddingRight:10 }}>
            Tüm Modeller
          </Text>
        </TouchableOpacity>
        </View>
      </View>
      <Text>deneme</Text>
      </ScrollView>
    </SafeAreaView>


  )
}

export default StartPage

const styles = StyleSheet.create({
  container: {
    
  },
  scrollStyle:{
   
  },
  header:{
    height:70,
    borderWidth:0
  },
  slider:{

  },
  secondHeader:{
    borderBottomWidth:3
  },
  secondHeaderText:{
    fontSize:20,
    fontWeight:'bold',
    padding:5
  },
  secondHeaderContext:{
    borderWidth:0,
    
    justifyContent: 'center',
    alignItems: 'center',
    width:'100%',
    height:450,
    
  },
  thirdHeaderContext:{
    borderBottomWidth:3,
    justifyContent: 'center',
    height:480
  }
})