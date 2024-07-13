import React,{ useState } from 'react';
import Header from './components/Header';
import ConversionWindow from './components/ConversionWindow';
import Footer from './components/Footer';
import { Container } from '@mui/material';
/*import axios from 'axios'; */
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

//use of axios to send http requests to the backend.

/* function App() {
  const [input, setInput] = useState('');
  const [conversation, setConversation] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/send', { prompt: input });
    setConversation([...conversation, { prompt: input, response: response.data }]);
    setInput('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={input} onChange={(e) => setInput(e.target.value)} />
        <button type="submit">Send</button>
      </form>
      <div>
        {conversation.map((msg, index) => (
          <div key={index}>
            <p><strong>You:</strong> {msg.prompt}</p>
            <p><strong>Bot:</strong> {msg.response}</p>
          </div>
        ))}
      </div>
    </div>
  );
} */
export default App;
