import React, { Component } from 'react';
import { TextInput, View, Button, Alert, Platform, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { addCardToDeck } from '../utils/api';
import { addCard } from '../actions';

class AddCard extends Component {
  static navigationOptions = ({navigation}) => {
    return { title: `Add card to ${navigation.state.params.id}` };
  };

  state = {
    question: '',
    answer: ''
  }

  clear = () => {
    this.setState({ question: '', answer: '' });
  }

  submit = () => {
    const { id } = this.props.navigation.state.params;
    const { question, answer } = this.state;
    const newCard = { question: question, answer: answer };

    addCardToDeck(id, newCard);
    this.props.addCard(id, newCard);

    Alert.alert(
      'Question was added successfully.'
    )

    this.clear();
  }

  render() {
    return (
      <View style={style.container}>
        <TextInput
          style={style.input}
          defaultValue="Question"
          onChangeText={(question) => this.setState({ question: question })}
          value={this.state.question}
        />

        <TextInput
          style={style.input}
          defaultValue="Answer"
          onChangeText={(answer) => this.setState({ answer: answer })}
          value={this.state.answer}
        />

        <View style={style.button}>
          <Button
            style={{ height: 40 }}
            title='Submit'
            onPress={this.submit}
          />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
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
    addCard: (deck, card) => dispatch(addCard(deck, card))
  };
}

export default connect(null, mapDispatchToProps)(AddCard);
