import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './Item';
const ListItems = props => {
  return (
    <FlatList
      style={styles.ListItem}
      data={props.array}
      renderItem={info => (
        <Item
          places={info.item.name}
          image={info.item.image}
          onItemPress={() => props.onItemSelected(info.item.key)}
        />
      )}
    />
  );
};
const styles = StyleSheet.create({
  ListItem: {
    width: '100%',
    padding: 8
  }
});
export default ListItems;
