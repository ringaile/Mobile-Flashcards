import React from 'react';
import { StyleSheet, View, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator, createStackNavigator } from 'react-navigation';
import { Constants } from 'expo';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { MaterialCommunityIcons, FontAwesome } from '@expo/vector-icons';
import DeckList from './components/DeckList';
import NewDeck from './components/NewDeck';
import DeckDetail from './components/DeckDetail';
import Quiz from './components/Quiz';
import AddCard from './components/AddCard';
import reducer from './reducers/index';
import { setLocalNotification } from './utils/notification';

function FlashcardsStatusBar() {
  return <View style={{ height: Constants.statusBarHeight }}><StatusBar /></View>;
}

const Tabs = createMaterialTopTabNavigator({
  DeckList: {
    screen: DeckList,
    navigationOptions: {
      tabBarLabel: 'Decks',
      tabBarIcon: ({ tintColor }) => <MaterialCommunityIcons name='cards' size={30} color={tintColor} />
    },
  },
  NewDeck: {
    screen: NewDeck,
    navigationOptions: {
      tabBarLabel: 'New Deck',
      tabBarIcon: ({ tintColor }) => <FontAwesome name='plus-square' size={30} color={tintColor} />
    },
  },
}, {
  navigationOptions: {
    header: null
  }
});

const Navigator = createStackNavigator({
  Home: {
    screen: Tabs
  },
  DeckDetail: {
    screen: DeckDetail
  },
  Quiz: {
    screen: Quiz
  },
  AddCard: {
    screen: AddCard
  }
})

export default class App extends React.Component {
  componentDidMount() {
    setLocalNotification();
  }

  render() {
    return (
      <Provider store={createStore(reducer)}>
        <View style={style.container}>
          <FlashcardsStatusBar />
          <Navigator />
        </View>
      </Provider>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20
  }
});
