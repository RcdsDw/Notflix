import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { createRoot } from 'react-dom/client';
import Register from './components/Logs/register';
import Login from './components/Logs/login';
import Homepage from './components/Pages/homepage'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import PrimarySearchAppBar from './components/Header/appBar'

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

createRoot(document.getElementById('root')).render(

<div style={{ overflow: 'hidden' }}>
  <ThemeProvider theme={darkTheme}>
    <CssBaseline />
      <Router>
        <PrimarySearchAppBar/>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/homepage" element={<Homepage />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
  </ThemeProvider>
  </div>
);
