import React from 'react';
import {Provider} from 'react-redux';
import store from './Components/Redux/Store/store';
import Home from './Components/Home/Home.js';

export default class App extends React.Component{

  render(){
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}

