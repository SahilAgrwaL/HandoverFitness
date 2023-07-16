import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/Logo-1.png';

const Footer = () => (
  <Box mt="80px" bgcolor="#DDE6ED">
    <Stack gap="40px" sx={{ alignItems: 'center' }} flexWrap="wrap" px="40px" pt="24px">
      <img src={Logo} alt="logo" style={{ width: '150px', height: '150px' }} />
    </Stack>
    <Typography variant="h4" sx={{ fontSize: { lg: '28px', xs: '20px' } }} mt="9px" textAlign="center" pb="40px">Made between exams by Sahil Kumar Agarwal</Typography>
  </Box>
);

export default Footer;