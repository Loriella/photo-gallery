import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import Header from "./components/Header/Header";
import UsersList from "./components/Users/UsersList";
import Albums from "./components/Albums/Albums";
import Photos from "./components/Photos/Photos";

const App = () => (
  <BrowserRouter basename="/photo-gallery">
    <div className="App">
      <Header/>
      <div className="container">
        <Route exact path="/" component={UsersList}/>
        <Route exact path="/users/:userId/albums" component={Albums}/>
        <Route path="/users/:userId/albums/:albumId" component={Photos}/>
      </div>
    </div>
  </BrowserRouter>
);

export default App;
