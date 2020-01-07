import React, { Component } from 'react';
import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

class Deck extends Component {
    render() {
      const { decks, id, navigation } = this.props;

      return (
        <TouchableOpacity
          style={style.button}
          onPress={() => navigation.navigate('DeckDetail', { id: id })}
        >
          <Text style={{ fontSize: 20 }}>{decks[id].title}</Text>
          <Text style={{ fontSize: 16, color: 'gray' }}>{decks[id].questions.length} cards</Text>
        </TouchableOpacity>
      );
    }
};

const style = StyleSheet.create({
  button: {
    margin: 20,
    width: 220
  }
});

function mapStateToProps(decks) {
  return { decks };
}

export default connect(mapStateToProps)(Deck);
