import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
const Item = props => {
  return (
    <TouchableOpacity onPress={props.onItemPress}>
      <View style={styles.ItemContainer}>
        <View>
          <Image source={props.image} style={styles.ImageStyle} />
        </View>
        <View style={styles.Title}>
          <Text style={styles.text}>{props.places}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  ItemContainer: {
    width: '100%',
    marginBottom: 4,
    borderRadius: 4,
    backgroundColor: '#eee',
    flexDirection: 'row',
    padding: 4,
    alignItems: 'center'
  },
  ImageStyle: {
    width: 50,
    height: 50
  },
  Title: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  text: {
    color: 'blue',
    fontSize: 16,
    fontWeight: '400'
  }
});
export default Item;
