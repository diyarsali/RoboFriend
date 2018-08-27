import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ListItems from './src/components/ListItem/ListItems.js';
import Form from './src/components/Form/Form.js';
import Image from './src/assets/image.jpg';
import ItemDetail from './src/components/itemDetail/ItemDetail.js';

export default class App extends React.Component {
  state = {
    array: [],
    selectedItem: null
  };
  onPlaceAdded = inputField => {
    this.setState(prevState => {
      return {
        array: prevState.array.concat({
          key: Math.random().toString(),
          name: inputField,
          image: {
            uri: 'https://robohash.org/' + Math.random()
          }
        })
      };
    });
  };

  PlaceSelectedHandler = key => {
    this.setState(prevState => {
      return {
        selectedItem: prevState.array.find(item => {
          return item.key == key;
        })
      };
    });
  };
  onDeletItemHandler = () => {
    this.setState(prevState => {
      return {
        array: prevState.array.filter(item => {
          return item.key !== prevState.selectedItem.key;
        }),
        selectedItem: null
      };
    });
  };
  onCloseHandler = () => {
    this.setState({ selectedItem: null });
  };

  render() {
    return (
      <View style={styles.container}>
        <ItemDetail
          selectedItem={this.state.selectedItem}
          onClose={this.onCloseHandler}
          onDelete={this.onDeletItemHandler}
        />
        <Form onPlaceAdded={this.onPlaceAdded} />
        <ListItems
          array={this.state.array}
          onItemSelected={this.PlaceSelectedHandler}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
