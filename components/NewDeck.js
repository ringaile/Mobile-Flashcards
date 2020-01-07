import React, { Component } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Platform } from 'react-native';
import { connect } from 'react-redux';
import { NavigationActions } from 'react-navigation';
import { saveDeck } from '../utils/api';
import { addDeck } from '../actions';

class NewDeck extends Component {
  state = {
    title: ''
  }

  submit = () => {
    const { title } = this.state;
    saveDeck(title);
    this.props.addDeck(title);

    const resetAction = NavigationActions.reset({
      index: 1,
      actions: [
        NavigationActions.navigate({ routeName: 'Home' }),
        NavigationActions.navigate({ routeName: 'DeckDetail', params: { id: title } })
      ]
    });
    
    this.props.navigation.dispatch(resetAction);
  }

  render() {
      return (
        <View style={style.container}>
          <Text style={style.text}>What is the title of your new deck?</Text>
          <TextInput
            style={style.input}
            placeholder='Deck Title'
            onChangeText={(title) => this.setState({ title: title })}
            value={this.state.title}
          />

          <View style={style.button}>
            <Button
              title='Create Deck'
              onPress={this.submit}
            />
          </View>
        </View>
      )
  }
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  },
  text: {
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
  input: {
    width: 300,
    height: 56,
    padding: 12,
    borderWidth: 1,
    borderColor: 'gray',
    margin: 16
  },
  button: {
    margin: 20,
    width: 220
  }
});

function mapDispatchToProps(dispatch) {
  return {
    addDeck: (deck) => dispatch(addDeck(deck))
  };
}

export default connect(null, mapDispatchToProps)(NewDeck);