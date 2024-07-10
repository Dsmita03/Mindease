import React, { useState } from 'react';
import { Box, Typography, TextField, Button, IconButton, Rating } from '@mui/material';
import { Facebook, Twitter, LinkedIn, Instagram, Email, Language } from '@mui/icons-material';

const Footer = () => {
  const [rating, setRating] = useState(0);

  const handleRatingChange = (event, newValue) => {
    setRating(newValue);
  };

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 3, backgroundColor: '#f4f4f4' }}>
      <Box sx={{ width: '45%' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Email sx={{ mr: 1 }} />
          <Typography>contact@mindease.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <Language sx={{ mr: 1 }} />
          <Typography>www.mindease.com</Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
          <LinkedIn sx={{ mr: 1 }} />
          <Typography component="a" href="https://linkedin.com" target="_blank">
            LinkedIn
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
          <Typography sx={{ mr: 2 }}>Follow us:</Typography>
          <IconButton color="primary" component="a" href="https://facebook.com" target="_blank">
            <Facebook />
          </IconButton>
          <IconButton color="primary" component="a" href="https://twitter.com" target="_blank">
            <Twitter />
          </IconButton>
          <IconButton color="primary" component="a" href="https://linkedin.com" target="_blank">
            <LinkedIn />
          </IconButton>
          <IconButton color="primary" component="a" href="https://instagram.com" target="_blank">
            <Instagram />
          </IconButton>
        </Box>
      </Box>
      <Box sx={{ width: '45%' }}>
        <Typography component="legend">Rate Us</Typography>
        <Rating
          name="simple-controlled"
          value={rating}
          onChange={handleRatingChange}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          variant="outlined"
          label="Feedback"
          multiline
          rows={8}
          sx={{ mb: 2 }}
        />
        <Button variant="contained" color="primary">Submit Feedback</Button>
      </Box>
    </Box>
  );
};
export default Footer;
