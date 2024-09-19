import { Dimensions, StyleSheet, Text, View, Image, ImageBackground } from 'react-native'
import React,{useState} from 'react'
import Carousel from 'react-native-reanimated-carousel'


const Slider = () => {
    const [pagingEnabled, setPagingEnabled] = useState(false)
    const width= Dimensions.get('window').width
    //console.log(width/2)
    const list=[
        {
            id:1,
            title: 'Yeni SANTA FE.',
            image: require('../../assets/images/slider1.jpg'),
            
        },
        {
            id:2,
            title: "Hyundai modellerinde 175.000 TL'ye varan 12 ay %0 faiz fırsatı. ",
            image: require('../../assets/images/slider2.jpg'),
            
        },
        {
            id:3,
            title: 'Hyundai Elektrikli Ailesi ',
            image: require('../../assets/images/slider3.jpg'),
            
        },
        {
            id:4,
            title: 'Sonbahar Servis Kampanyası',
            image: require('../../assets/images/slider4.jpg'),
            
        },
        {
            id:5,
            title: 'Yeni TUCSON',
            image: require('../../assets/images/slider5.jpg'),
            
        },
        {
            id:6,
            title: 'IONIQ 6',
            image: require('../../assets/images/slider6.jpg'),
        },
    ]
  return (
    <View style={styles.container}>
        <Carousel
            style={styles.carousel}
            width={width}
            height={width/2}
            data={list}
            autoPlay={true}
            //pagingEnabled={pagingEnabled}
            scrollAnimationDuration={1000}
            renderItem={({item})=> (
                <View style={styles.imgContainer}>
                    
                    <ImageBackground
                        style={styles.img}
                        source={item.image}
                    >
                        <Text style={{
                            color:'white',
                            fontSize:18,
                            paddingLeft:40,
                            paddingTop:40,
                            fontWeight:'bold'
                            
                        }}>
                            {item.title}
                        </Text>
                        <Text>

                        </Text>
                    </ImageBackground>
                    
                </View>
            )}
        />
    </View>
  )
}

export default Slider

const styles = StyleSheet.create({
    container:{
        borderWidth:0,
        height:224,
        top:0
    },
    carousel:{
    },
    imgContainer:{
        flex:1,
        borderWidth:0,
        justifyContent: 'center',
        overflow:'hidden',
        alignItems:'stretch'
    },
    img:{
        width:'100%',
        height:'100%'
    },
    
})