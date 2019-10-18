import React from 'react';
import ListeLivres from './app/ListeLivres'
import globalReducer from './app/reducers'
import { Provider } from 'react-redux'
import { createStore } from 'redux'

const store = createStore(globalReducer)


export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
          <ListeLivres/>
      </Provider>
    );
  }
}