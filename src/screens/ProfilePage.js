import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import MenuTab from '../components/MenuTab'



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
                <Text style={styles.tel}>+90 555 555 5555</Text>
            </View>
            <View style={styles.options}>
            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchableText}>Profili Düzenle</Text>
                
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable} >
                <Text style={styles.touchableText}>Şifreyi Değiştir</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchableText}>Adresi Güncelle</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.touchable}>
                <Text style={styles.touchableText}>Çıkış Yap</Text>
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
        flex:10,
        borderWidth:1,
        justifyContent:'space-evenly',
        width:'90%'
    },
    touchable:{
        flexDirection:'row',
        padding:10
    },
    touchableText:{
        fontSize:18
    }
})