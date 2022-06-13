import React from 'react'
import { Box, Stack ,Typography } from '@mui/material'

const HeroBanner = () => {
  return (
    <Box sx={{ mt:{lg: '212px', xs:'70px'},ml: {sm: '50px'}}} position="relative" p="20px">
      <Typography color="#FF2626" fontWeight="600" fontSize="26px">Fitnes Club</Typography>
      <Typography>Sweat, Smile <br /> and Repeat</Typography>
      <Typography>Check Out the most effective exercises</Typography>
    </Box>
  )
}

export default HeroBanner