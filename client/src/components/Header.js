import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box, Tabs, Tab } from '@mui/material';

const Header = ({ username }) => {
  return (
    <AppBar position="static" sx={{ backgroundColor: '#3f51b5' }}>
      <Toolbar>
        <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', mr: 2 }}>
          <img src="../img/Mind Ease.png" alt="MindEase Logo" 
          style={{ height: '100px', marginBottom: '6px' }} />
            <Typography variant="subtitle1" color="inherit">
              {username}
            </Typography>
          </Box>
          <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' }}>
            
          </Typography>
          <Button sx={{ backgroundColor: 'grey', color: 'white' }}>Logout</Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
