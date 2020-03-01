import React from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter } from 'react-router-dom';
import Routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
        <Header/>
        <BrowserRouter>
            <Routes />
        </BrowserRouter>
    </div>
  );
}

export default App;
