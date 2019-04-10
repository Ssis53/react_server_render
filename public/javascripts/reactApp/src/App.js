import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import { SwitchRouter } from './SwitchRouter';


const App = (props) => {
  return (
    <BrowserRouter>
      <SwitchRouter />
      <Footer />
    </BrowserRouter>
  )
}

export default App;