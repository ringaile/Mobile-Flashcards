import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import { connect } from 'react-redux';
import { AppLoading } from 'expo';
import { getAllDecks } from '../utils/api';
import { getDecks } from '../actions';
import Deck from './Deck';

class DeckList extends Component {
  state = {
    hasLoad: false
  }

  componentDidMount() {
    const { getDecks } = this.props;

    getAllDecks()
      .then((decks) => getDecks(JSON.parse(decks)))
      .then(() => this.setState(() => ({ hasLoad: true })));
  }

  render() {
    const { decks, navigation } = this.props;
    const { hasLoad } = this.state;

    if (hasLoad === false) {
      return <AppLoading />;
    }

    return (
      <ScrollView>
        {Object.keys(decks).map((deck) => (
          <Deck key={deck} id={deck} navigation={navigation}/>
        ))}
      </ScrollView>
    );
  }
}

function mapStateToProps(decks) {
  return { decks };
}

function mapDispatchToProps(dispatch) {
  return {
    getDecks: (decks) => dispatch(getDecks(decks))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckList);
