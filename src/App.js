import React from 'react';

import { Footer, Blog, Possibility, Features, WhatGPT3, Header } from './containers';
import {CTA, Brand, Navbar} from './components';
import './App.css';
import particleBackground from './components/particleBackground';


const App = () => {
  return (
    <div className='App'>
        
        <div className='gradient__bg'>
        <particleBackground/>
            <Navbar/>
            <Header/>
        </div>
        <Brand/>
        <WhatGPT3/>
        <Features/>
        <Possibility/>
        <CTA/>
        <Blog/>
        <Footer/>
    </div>
  )
}

export default App