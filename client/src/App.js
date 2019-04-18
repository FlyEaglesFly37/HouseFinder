import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import { BrowserRouter, Route } from 'react-router-dom';
import AppNavbar from './components/AppNavbar';
import  { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HouseList from './components/HouseList';
import HouseModal from './components/HouseModal';
import HouseDetails from './components/HouseDetails';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <AppNavbar />
          <Route exact path="/" component={HouseList} />
          <Route exact path="/" component={HouseModal} />
          <Route path={"/:id"} component={HouseDetails} />
        </div>
      </BrowserRouter>
        
      </Provider>
    );
  }
}

export default App;
