import {
  StyleSheet, Text, View,
  TextInput, Pressable, Image
} from 'react-native'
import React, {useState} from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomModal from '../components/CustomModal'
const LoginPage = ({ navigation }) => {

  const [sicil, setSicil] = useState('')
  const [password, setPassword] = useState('')

  const testSicil="T123456"
  const testPassword="123456"

  const [modalVisible, setModalVisible] = useState(false);

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
          autoCapitalize='characters'
          maxLength={7}
          onChangeText={(value)=> setSicil(value)}

        />
        <TextInput
          style={styles.textInputStyle}
          placeholder='Şifreniz..'
          placeholderTextColor={'gray'}
          secureTextEntry={true}
          maxLength={10}
          onChangeText={(value)=>setPassword(value)}

        />
        </View>
        
        
        <Pressable
          onPress={()=>{
            if (testSicil===sicil && password===testPassword) {
              navigation.navigate('Profile');
            }else{
              setModalVisible(true)
            }
          }}
          style={({ pressed }) => [{
          backgroundColor: pressed ? 'gray' : '#1F91DC'
          }, styles.buttonStyle]}
          
          >
           
          <Text style={styles.textStyle}>
            Giriş Yap
          </Text>
        </Pressable>
        
        <Pressable
          style={({ pressed }) => [{
            backgroundColor: pressed ? 'gray' : '#1F91DC'
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
      {modalVisible && (
        <CustomModal
        title="Sicil numarası veya şifre yanlış!"
        buttonTitle="Kapat"
        modalVisible={modalVisible}
        onClose={() => setModalVisible(false)} 
        />
      )}
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