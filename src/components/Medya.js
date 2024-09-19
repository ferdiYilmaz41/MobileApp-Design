import { StyleSheet, Text, View, 
    FlatList, TouchableOpacity,
    ImageBackground, Image, Dimensions
    } from 'react-native'
import React, {useRef} from 'react'

const cards=[
    {
        id:1,
        title:'Hyundai ve IVECO’dan IAA 2024te Elektrikli Ticari Şovu.',
        date:'2024.09.16',
        image:require('../../assets/images/medya1.jpg')
    },
    {
        id:2,
        title:'Hep Daha Fazlası için Hyundai Yeni SANTA FE.',
        date:'2024.09.11',
        image:require('../../assets/images/medya2.jpg')
    },
    {
        id:3,
        title:'Hyundai’den 2030’a Kadar Yeni Hedefler: Yıllık 5.5 Milyon Satış ve 21 Yeni Elektrikli Model.',
        date:'2024.08.28',
        image:require('../../assets/images/medya3.jpg')
    },
    {
        id:4,
        title:'Hyundai En Yenilikçi Markalardan Biri Seçildi.',
        date:'2024.08.21',
        image:require('../../assets/images/medya4.jpg')
    },
    {
        id:5,
        title:'Hep Daha Fazlasını Sunan Hyundai Yeni Santa Fe Gün Sayıyor.',
        date:'2024.08.16',
        image:require('../../assets/images/medya5.jpg')
    },
    {
        id:6,
        title:'Hyundai Yeni SANTA FE Amerika’da En İyi SUV Seçildi.',
        date:'2024.08.02',
        image:require('../../assets/images/medya6.jpg')
    },
]


const Medya = () => {
    const flatListRef=useRef(null);
    const width= Dimensions.get('window').width
        console.log(width)
    const renderItem=({item, index})=>{
        return(
            <TouchableOpacity style={{
                ...styles.card
            }}>
                {/* <ImageBackground source={item.image}
                
                style={{height:224, width:448}} >
                    <Text>
                        {item.title}
                    </Text>
                    <Text>
                        {item.date}
                    </Text>
                </ImageBackground> */}
                <View style={{
                     width: 448,
                     height: 300,
                     alignItems: 'center', 
                     justifyContent:'space-evenly'  
                }}>
                <Image source={item.image}
                style={{
                    width: '100%',         
                    height: undefined,   
                    aspectRatio: 4 / 3,   
                    }}/>
                </View>
                    <Text style={styles.titleStyle}>
                        {item.title}
                    </Text>
                    <Text style={styles.dateStyle}>
                        {item.date}
                    </Text>
            </TouchableOpacity>
        )
    }
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        horizontal
        pagingEnabled
        data={cards}
        keyExtractor={
            (item)=>item.id.toString()
        }
        renderItem={renderItem}
      />
    </View>
  )
}

export default Medya

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        
    },
    dateStyle:{
        paddingLeft:30
    },
    titleStyle:{
        fontSize:20,
        paddingTop:30,
        paddingLeft:30,
        paddingRight:150,
        fontWeight:'bold'
    },
    card:{
        borderWidth:0,
        width:411.42857142857144
        //width:411.42857142857144  
        //justifyContent: 'center',
        //alignItems: 'center',
    }
})