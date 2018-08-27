import React from 'react';
import { Text, Modal, View, Image, Button, StyleSheet } from 'react-native';

const ItemDetail = props => {
  let modalContent = null;
  if (props.selectedItem) {
    modalContent = (
      <View>
        <View>
          <Image style={styles.ImageStyle} source={props.selectedItem.image} />
        </View>
        <View style={styles.Title}>
          <Text style={styles.text}>{props.selectedItem.name}</Text>
        </View>
      </View>
    );
  }

  return (
    <Modal
      onRequestClose={props.onClose}
      visible={props.selectedItem !== null}
      animationType="slide">
      <View style={styles.CardContainer}>{modalContent}</View>
      <View style={styles.buttonContainer}>
        <Button color="red" title="Delet" onPress={props.onDelete} />
      </View>
      <View style={styles.buttonContainer}>
        <Button color="blue" title="close" onPress={props.onClose} />
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
  CardContainer: {
    padding: 4
  },
  ImageStyle: {
    width: '100%',
    height: 220
  },
  Title: {
    width: '100%',
    padding: 4,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 20,
    fontWeight: 'bold'
  },
  buttonContainer: {
    width: '100%',
    padding: 4,
    marginBottom: 4
  }
});
export default ItemDetail;
