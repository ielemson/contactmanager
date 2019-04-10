import React, { Component } from 'react';
import Contacts from './components/Contacts';
import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from './context'
import './App.css';
class App extends Component {
  render() {
    return (
   <Provider>
   <div>
   <Header />
   <div className="container">
   <Contacts/></div>
     </div>
   </Provider>
    );
  }
}

export default App;
