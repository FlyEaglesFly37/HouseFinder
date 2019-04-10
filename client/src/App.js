import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import AppNavbar from './components/AppNavbar';
import  { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import HouseList from './components/HouseList';
import HouseModal from './components/HouseModal';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <Container>
            <HouseModal />
            <HouseList />
          </Container>
        </div>
      </Provider>
    );
  }
}

export default App;
