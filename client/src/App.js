import React from 'react';
import Header from './components/Header';
import ConversionWindow from './components/ConversionWindow';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <Header> 
      </Header>
      <Container sx={{ my: 2 }}>
        <ConversionWindow />
      </Container>
      
      <Footer />
    </div>
  );
};

export default App;
