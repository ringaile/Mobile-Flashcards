import React, { Component } from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import { connect } from 'react-redux';

class DeckDetail extends Component {
  static navigationOptions = ({ navigation }) => {
    return { title: navigation.state.params.id };
  }

  render() {
    const { deck, navigation } = this.props;

    return (
      <View style={style.container}>
        <View style={style.title}>
          <Text style={{ fontSize: 40 }}>{deck.title}</Text>
          <Text style={{ fontSize: 30, color: 'gray' }}>
            {deck.questions.length} cards
          </Text>
        </View>

        <View style={{ alignItems: 'center' }}>
          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('AddCard', { id: navigation.state.params.id })}
              title='Add Card'
              style={style.button}
            />
          </View>

          <View style={style.button}>
            <Button
              onPress={() => navigation.navigate('Quiz', { id: navigation.state.params.id })}
              title='Start Quiz' style={style.button}
            />
          </View>
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
  title: {
    fontSize: 40,
    textAlign: 'center',
    padding: 10,
    margin: 10
  },
  button: {
    margin: 20,
    width: 220
  }
});

function mapStateToProps(decks, ownProps) {
  const deck = decks[ownProps.navigation.state.params.id];
  return { deck };
}

export default connect(mapStateToProps)(DeckDetail);
