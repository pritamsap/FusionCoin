import React from 'react'
import { Layout, Typography, Space } from 'antd';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";
import './App.css'
import Navbar from './components/Navbar';
import HomePage from './components/Homepage';
import Exchanges from './components/Exchanges';
import CryptoDetails from './components/Cryptodetails';
import Cryptocurrencies from './components/Cryptocurrencies';
import News from './components/News';

const App = () => {
  return (
      <div className='app'>
          <Navbar />
          <div className='main'>
            <Layout>
              <div className='routes'>
                <Routes>
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  <Route exact path="/exchanges">
                    <Exchanges />
                  </Route>
                  <Route exact path="/cryptocurrencies">
                    <Cryptocurrencies />
                  </Route>
                  <Route exact path="/crypto/:coinId">
                    <CryptoDetails />
                  </Route>
                  <Route exact path="/news">
                    <News />
                  </Route>
                </Routes>

              </div>
            </Layout>
          </div>
      </div>
    
  )
}

export default App 