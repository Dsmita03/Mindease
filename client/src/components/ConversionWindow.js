import React, { useState } from 'react';
import { Box, TextField, Button, Paper, Typography } from '@mui/material';

const ConversionWindow = () => {
  const [conversations, setConversations] = useState([]);
  const [prompt, setPrompt] = useState('');

  const handlePromptChange = (e) => setPrompt(e.target.value);

  const handlePromptSubmit = () => {
    if (prompt.trim()) {
      const newConversation = { user: prompt, ai: `AI response to: ${prompt}` };
      setConversations([...conversations, newConversation]);
      setPrompt('');
    }
  };

  return (
    <Box sx={{ p: 2, height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Paper sx={{ p: 2, mb: 2, flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
        <Typography variant="h4">Conversation Window</Typography>
        <Box sx={{ flex: '1 1 auto', overflowY: 'auto', my: 2 }}>
          {conversations.map((conv, index) => (
            <Box key={index} sx={{ mb: 2 }}>
              <Typography variant="body1"><strong>User:</strong> {conv.user}</Typography>
              <Typography variant="body1"><strong>AI:</strong> {conv.ai}</Typography>
            </Box>
          ))}
        </Box>
        <Box sx={{ display: 'flex', gap: 2 }}>
          <TextField
            fullWidth
            variant="outlined"
            value={prompt}
            onChange={handlePromptChange}
            placeholder="Type your prompt here..."
          />
          <Button variant="contained" onClick={handlePromptSubmit}>Send</Button>
        </Box>
      </Paper>
    </Box>
  );
};

export default ConversionWindow;
