import React from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Logo: React.FC = () => {
  return (
    <Typography variant="h5" component="div">
      <Typography display="inline-block" color="#29b6f6" component="span" variant="h5">
        I
      </Typography>
      {bull}
      <Typography display="inline-block" color="#f44336" component="span" variant="h5">
        N
      </Typography>
      {bull}
      <Typography display="inline-block" color="#ffa726" component="span" variant="h5">
        D
      </Typography>
      {bull}
      <Typography display="inline-block" color="#29b6f6" component="span" variant="h5">
        E
      </Typography>
      {bull}
      <Typography display="inline-block" color="#66bb6a" component="span" variant="h5">
        X
      </Typography>
      {bull}
      <Typography display="inline-block" color="#f44336" component="span" variant="h5">
        E
      </Typography>
      {bull}
      <Typography display="inline-block" color="#42a5f5" component="span" variant="h5">
        R
      </Typography>
    </Typography>
  )
}

export default Logo