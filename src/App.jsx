import React from 'react'
import './App.css'
import './assets/fonts/fonts.css';
import { MenuProvider } from './components/MenuContext.jsx';
import Header from './components/Header-M/Header.jsx'
import Banner from './components/Banner/Banner.jsx'
import Ad from './components/Ad/Ad.jsx'


function App() {
  return (
  <div className="App">
    <MenuProvider>
      <Header />
      <Banner />
    </MenuProvider>
    <Ad/>
  </div>
    
    
  )
}

export default App;