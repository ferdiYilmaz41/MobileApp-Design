import {
  StyleSheet, Text, View,
  TextInput, Pressable, Image
} from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const LoginPage = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Image
      source={require('../../assets/images/elantra.jpg')}
      style={{
        position:'absolute',
        height:'100%'
      }}
      />
      <Text style={{
        fontWeight:'bold',
        fontSize:30,
        margin:30

      }}>
        Kullanıcı Giriş Ekranı
      </Text>
      <View style={styles.login}>
        <View style={{
          flex:1,
          alignItems:'center',
          justifyContent:'center',
          borderBottomWidth:1,
          width:'100%',
          height:'50%',
          borderBottomColor:'silver'
        }}>
        <TextInput
          style={styles.textInputStyle}
          placeholder='Sicil numaranız..'
          placeholderTextColor={'gray'}
          maxLength={7}
        />
        <TextInput
          style={styles.textInputStyle}
          placeholder='Şifreniz..'
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          maxLength={10}
        />
        </View>

        
        <Pressable
          //onPress={handleOnPress}
          style={({ pressed }) => [{
          backgroundColor: pressed ? 'gray' : '#3498DB'
          }, styles.buttonStyle]}>
          <Text style={styles.textStyle}>
            Giriş Yap
          </Text>
        </Pressable>
        <Pressable
          style={({ pressed }) => [{
            backgroundColor: pressed ? 'gray' : '#3498DB'
            }, styles.buttonStyle]}
            onPress={()=>navigation.navigate('Start')}
        >
          <Text style={styles.textStyle}>
            Anasayfaya Dön
          </Text>
        </Pressable>
        <Pressable>
          <Text style={{
            fontWeight:'bold',
            marginLeft:130
          }}>
            Şifremi unuttum..
          </Text>
        </Pressable>
      </View>

    </SafeAreaView>

  )
}

export default LoginPage

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    
    justifyContent: 'flex-start',
    backgroundColor: 'blue',
    
  },
  login: {
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0,
    width: '80%',
    height: 300,
    backgroundColor: 'white',
    borderRadius: 10
  }, 
  textInputStyle: {
    borderBottomWidth: 1,
    borderBottomColor:'black',
    width: '70%',
    height: 40,
    margin: 10,
    borderRadius: 10,
    textAlign: 'center',
    fontSize: 16
  },
  buttonStyle: {
    borderWidth: 0,
    width: '70%',
    height: 40,
    borderRadius: 10,
    margin: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop:20
  },
  textStyle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})