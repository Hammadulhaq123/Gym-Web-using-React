import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import Logo from '../assets/images/Logo.png';

const Navbar = () => {
  return (
      <Stack
      direction="row"
      justifyContent="space-around"
      sx={{ gap: {
        sm:"122px", xs:"40px"}, mt: {
          s:"32px", xs: " 20px"
        }, justifyContent: "none"
      }} px="22px">
        <Link to="/">
        <img src={ Logo } alt="logo" style={{width:'56px', height:'48px', margin: '0 20px'}} />
        </Link>
        <Stack
        direction="row"
        gap="48px"
        fontSize="24px"
        alignItems="flex-end"
        >
          <Link to="/" style={{textDecoration:'none', color:'#fff', borderBottom: '3px solid #046ec4'}}>Home</Link>
          <a href="#exercises" style={{textDecoration: 'none', color: '#046ec4'}}>Exercises</a>
        </Stack>
      </Stack>
  )
}

export default Navbar
