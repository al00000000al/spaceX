import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Features from './components/Features/Features';
import Calendar from './components/Calendar/Calendar';
import Details from './components/Details/Details';
import Footer from './components/Footer/Footer';
import './style.css';

function App() {
  return (
      <>
          <Header/>
          <Main/>
          <Features/>
          <Details/>
          <Calendar/>
          <Footer/>
    </>
  );
}

export default App;
