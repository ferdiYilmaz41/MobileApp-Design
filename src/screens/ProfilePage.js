import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MenuTab from '../components/MenuTab'
import Icon from 'react-native-vector-icons/Feather'
import  IconArrow  from 'react-native-vector-icons/MaterialIcons'

const ProfilePage = ({ navigation }) => {
    return (
        <View style={styles.container}>

            
            <View style={styles.headerView}>
                <Text style={styles.headerText}>Profilim</Text>
            </View>

            <View style={styles.imageContainer} >
                <Image style={styles.image}
                source={require("../../assets/images/elantra.jpg")}/>
            </View>

            <View style={styles.infos}>
                
                <Text style={styles.name}>Ahmet Yılmaz</Text>
                <Text style={styles.tel}>+90 539 829 1628</Text>
            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.touchable}
            onPress={()=> navigation.navigate('EditProfile')}>
                <View style={styles.iconStyle}>
                
                    <Icon name='edit' size={30}/>
                </View>
                <Text style={styles.touchableText}>Profili Düzenle</Text>
                <IconArrow name='keyboard-arrow-right' size={50}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable} >
            <View style={styles.iconStyle}>
            <IconArrow name='password' size={30}/>
                </View>
                <Text style={styles.touchableText}>Şifreyi Değiştir</Text>
                <IconArrow name='keyboard-arrow-right' size={50}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
            <View style={styles.iconStyle}>
            <IconArrow name='location-on' size={30}/>
                </View>
                <Text style={styles.touchableText}>Adresi Güncelle</Text>
                <IconArrow name='keyboard-arrow-right' size={50}/>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}
                onPress={()=> navigation.navigate('Start')}
                
            >
            <View style={{
                 borderWidth:0,
                 height:50,
                 width:50,
                 borderRadius:20,
                 alignItems:'center',
                 justifyContent:'center',
                backgroundColor:'#FF0055'
            }}>
            <IconArrow name='logout' size={30}/>
                </View>
                <Text style={styles.touchableText}>Çıkış Yap</Text>
                <IconArrow name='keyboard-arrow-right' size={50}/>
            </TouchableOpacity>
            </View>
            




            <View style={styles.menuStyle}>
                <MenuTab
                    tempPress1={() => navigation.navigate('Home')}
                    tempPress2={() => navigation.navigate('Message')}
                    tempPress3={() => navigation.navigate('Profile')}
                />
            </View>
        </View>
    )
}

export default ProfilePage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        
    },
    menuStyle: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        padding: 0,
        alignItems: 'center'
    },
    headerView: {
        //flex:2,
        borderWidth: 0,
        width: 'auto',
        height:120,
        // position: 'absolute',
        // top: 50,

        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        fontWeight: 'bold',
        marginTop:40

    },
    
    imageContainer:{
        //flex:2,
        borderWidth:3,
        borderColor:'blue',
        borderRadius:100,
        alignItems:'center',
        height:105,
        marginRight:250
        // bottom:260,
        // right:140
    },
    image:{
        height:100,
        width:100,
        borderWidth:5,
        borderRadius:50,
        alignItems:'stretch'
    },
    infos:{
        flex:2,
        borderWidth:0,
        marginRight:150
        // bottom:250,
        // right:80
    },
    name:{
        fontWeight:'bold',
        fontSize:34
    },
    tel:{
        marginTop:10,
        fontSize:18,
        color:'gray'
    },
    options:{
        flex:5,
        justifyContent:'',
        alignItems:'center',
        width:'90%',
        padding:0,
        bottom:70,
        borderWidth:0,
    },
    touchable:{
        flexDirection:'row',
        width:'100%',
        borderRadius:20,
        padding:10,
        marginBottom:50,
        justifyContent:'space-between',
        backgroundColor:'#f8d3c9',
        borderWidth:0
    },
    touchableText:{
        fontSize:20,
        borderWidth:0,
        padding:10,
        textAlign:'center',
        justifyContent:'center'
    },
    iconStyle:{
        borderWidth:0,
        height:50,
        width:50,
        borderRadius:20,
        alignItems:'center',
        justifyContent:'center',
        backgroundColor:'#78d2ed'
    }
})