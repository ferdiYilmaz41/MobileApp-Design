import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView,
  Platform,
 } from 'react-native';
import Header from './src/components/Header.js'
import {NavigationContainer, TabRouter} from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import StartPage from './src/screens/StartPage.js';
import LoginPage from './src/screens/LoginPage.js';
import ProfilePage from './src/screens/ProfilePage.js';
import HomePage from './src/screens/HomePage.js';
import MessagePage from './src/screens/MessagePage.js';



const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Profile"
      screenOptions={{ headerShown: false }} >
        <Stack.Screen name="Start" component={StartPage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name='Profile' component={ProfilePage} />
        <Stack.Screen name='Home' component={HomePage}/>
        <Stack.Screen name='Message' component={MessagePage}/>
      </Stack.Navigator>
    </NavigationContainer>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? 25 : 0,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
