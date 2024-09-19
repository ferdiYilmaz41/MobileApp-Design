import { StyleSheet, Text, View, FlatList, Image } from 'react-native'
import React from 'react'

const DATA = [
    {
      id: '1',
      title: 'i10',
      image:require('../../assets/images/i10.jpg')
    },
    {
      id: '2',
      title: 'i20',
      image:require('../../assets/images/i20.jpg')
    },
    {
      id: '3',
      title: 'Elantra',
      image:require('../../assets/images/elantraModel.jpg')
    },
    {
        id: '4',
        title: 'IONIQ 5',
        image:require('../../assets/images/ionic5.jpg')
      },
  ];
  
  const Item = ({title, image}) => (
    <View style={styles.item}>
        <Image source={image} style={styles.img}/>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Models = () => {
  return (
    <View style={styles.container}>
        <FlatList
        data={DATA}
        renderItem={({item}) => <Item title={item.title} 
                                image={item.image} />}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  )
}

export default Models

const styles = StyleSheet.create({
    container:{
    },
    item: {
        flex:1,
        width:'45%',
        backgroundColor: '#808080',
        padding:10,
        marginVertical: 8,
        marginHorizontal: 16,
        borderWidth:0,
        borderRadius:10,
        alignItems: 'center',
    },
    title: {
        borderWidth:0,
        fontSize: 25,
        textAlign:'center',
        backgroundColor:'white',
        borderRadius:10,
        width:100
    },
    img:{
        height:150,
        width:150,
        resizeMode:'contain'
    }
})