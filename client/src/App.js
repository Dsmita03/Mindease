import React, { useState } from 'react';
import axios from 'axios';
import Header from './components/Header';
import ConversionWindow from './components/ConversionWindow';
import Footer from './components/Footer';
import { Container } from '@mui/material';
import './App.css';

const App = () => {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/send', { prompt: input });
      setConversation([...conversation, { prompt: input, response: response.data }]);
      setInput('');
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <div className="App">
      <Header />
      <Container sx={{ my: 2 }}>
        <ConversionWindow />
      </Container>
      <Footer />
    </div>
  );
};

export default App;
