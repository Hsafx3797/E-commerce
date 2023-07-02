import React from 'react';
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
// Hooks
import { useThemeHook } from './GlobalContext/ThemeProvider';
import { Router } from '@reach/router';
// Components
import Header from './Components/Header';
// Pages
import Home from './Pages/Home';
import Cart from './Pages/Cart';



function App() {

  const [theme] = useThemeHook();

  return (
    <main className={theme? 'bg-black' : 'bg-light-2'} style={{ height: '100vh', overflow: 'auto', }   }>
      <Header/>
      <Router>
        <Home path="/" />
        <Cart path="/cart" />
      </Router>
    </main>
  );
}

export default App;
