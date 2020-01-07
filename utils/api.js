import { AsyncStorage } from 'react-native';
import { DECK_STORAGE_KEY, getResults } from './deck';

export function setInitialDecks(decks) {
  AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
}

export function getAllDecks() {
  return AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then(getResults);
}

export function addCardToDeck(deckTitle, card) {
  AsyncStorage.getItem(DECK_STORAGE_KEY)
    .then((decksString) => {
      const decks = JSON.parse(decksString);
      decks[deckTitle].questions.push(card);
      AsyncStorage.setItem(DECK_STORAGE_KEY, JSON.stringify(decks));
    });
}

export function saveDeck(title) {
  const newDeck = {
    [title]: {
      title: title,
      questions: []
    }
  };

  AsyncStorage.mergeItem(DECK_STORAGE_KEY, JSON.stringify(newDeck));
}
