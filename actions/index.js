export const GET_DECKS = 'GET_DECKS';
export const ADD_CARD = 'ADD_CARD';
export const ADD_DECK = 'ADD_DECK';

export function getDecks(decks) {
  return {
    type: GET_DECKS,
    decks
  };
}

export function addCard(deck, card) {
  return {
    type: ADD_CARD,
    deck, card
  };
}

export function addDeck(deck) {
  return {
    type: ADD_DECK,
    deck
  };
}
