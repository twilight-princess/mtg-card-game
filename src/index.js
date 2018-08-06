import React from 'react';
import { render } from 'react-dom';

//ROUTER
import { BrowserRouter, Switch, Route } from "react-router-dom";

//REDUX
import { Provider } from "react-redux";
import store from "./redux";

import Nav from './components/Nav'
import App from './components/App'
import SearchCards from './components/SearchCards'
import Decks from './components/Decks'
import Deck from './components/Deck'

render(
    <BrowserRouter>
      <Provider store={store}>      
        <div> 
          <Nav />
          <Switch>
            <Route path="/" exact component={App} />
            <Route path="/card" component={SearchCards} />
            <Route path="/decks" render={Decks} />
            <Route path="/deck" component={Deck} />
          </Switch>
        </div>
      </Provider>
    </BrowserRouter>
  , document.getElementById("root"));