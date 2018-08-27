import React from 'react';
import { View, Text, StyleSheet, Button, TextInput } from 'react-native';

class Form extends React.Component {
  state = {
    inputField: ''
  };
  click = () => {
    if (this.state.inputField.trim() === '') {
      return;
    }
    this.props.onPlaceAdded(this.state.inputField);
    this.setState({ inputField: '' });
  };

  render() {
    return (
      <View style={styles.textContainer}>
        <TextInput
          placeholder="Name the robot"
          onChange={val => this.setState({ inputField: val.nativeEvent.text })}
          value={this.state.inputField}
          style={styles.input}
        />
        <Button onPress={this.click} title="Add" style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  textContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '70%'
  },
  button: {
    width: '20%'
  }
});
export default Form;
