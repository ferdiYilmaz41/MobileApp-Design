import { StyleSheet, Text, View, Modal, Pressable, Alert} from 'react-native'
import React, {useState} from 'react'

const CustomModal = ({title,buttonTitle,modalVisible, onClose}) => {
    //const [visib, setModalVisible] = useState(false);
    //setModalVisible(modalVisible)
     return (
      
        <Modal

          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={onClose}
          >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>{title}</Text>
              <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={onClose}>
              <Text style={styles.textStyle}>{buttonTitle}</Text>
            </Pressable>
            </View>
          </View>
        </Modal>
      
    );
  };
  
  export default CustomModal;

  const styles = StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      marginBottom:310,
      backgroundColor: '#AAA4AC',
      borderRadius: 20,
      padding: 30,
      alignItems: 'center',
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 5,
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      borderWidth:1,
      width:100
    },
    buttonClose: {
      backgroundColor: 'red',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
      fontSize:18
    },
    modalText: {
      marginBottom: 15,
      textAlign: 'center',
      fontSize:18,
      fontWeight:'bold'
    },
  });
  
  