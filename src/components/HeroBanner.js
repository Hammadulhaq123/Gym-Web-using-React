import React from 'react'
import { Box, Stack, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/fuck.png';



const HeroBanner = () => {
  return (
    <Box sx={{
      mt: {
        lg: "212px" , xs:"70px"
      },
      ml: {
        sm:"50px"
      }
    }} position="relative" p="20px">
      <Typography color="#fff" fontWeight="600" fontSize="26px">
        Gym Flex
      </Typography>
      <Typography color="#046ec4" fontWeight={700} sx={{ fontSize: {lg: "44px", xs:"40px"}
      }} mb="23px" mt="30px">
        Get In Shape <br /> Today.
      </Typography>
      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective Exercises.
      </Typography>
      <Button variant="contained" href='#Exercises' sx={{backgroundColor:"#046ec4", padding:"10px"}}>Explore Exercises</Button>
      <Typography fontWeight={600} color="#fff" sx={{opacity:0.1, display: {lg:"block" , xs:"block"}, fontSize: {lg:"120px" , xs: "80px"}}}
      >Join Now!</Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img"/>
    </Box>
  )
}

export default HeroBanner
