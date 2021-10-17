import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import { SxProps } from '@mui/system'

type Size = 'lg' | 'md' | 'sm'
type FontSize = 'h3' | 'h5' | 'h6'

interface Props {
  onClick?: (...args: any[]) => any
  sx?: SxProps
  size?: Size
}

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const Logo: React.FC<Props> = ({ onClick, sx, size = 'md' }) => {
  const [fontSize, setFontSize] = useState<FontSize>('h5')

  const handleClick = () => {
    if (onClick) {
      onClick()
    }
  }

  useEffect(() => {
    switch(size) {
      case 'lg': 
        setFontSize('h3'); break;
      case 'sm': 
        setFontSize('h6'); break;
      default: 
        setFontSize('h5');
    }
  }, [size])

  return (
    <Box
      sx={{ cursor: onClick ? 'pointer' : 'unset', ...sx }}
      onClick={handleClick}
    >
      <Typography display="inline-block" color="#29b6f6" component="span" variant={fontSize}>
        I
      </Typography>
      {bull}
      <Typography display="inline-block" color="#f44336" component="span" variant={fontSize}>
        N
      </Typography>
      {bull}
      <Typography display="inline-block" color="#ffa726" component="span" variant={fontSize}>
        D
      </Typography>
      {bull}
      <Typography display="inline-block" color="#29b6f6" component="span" variant={fontSize}>
        E
      </Typography>
      {bull}
      <Typography display="inline-block" color="#66bb6a" component="span" variant={fontSize}>
        X
      </Typography>
      {bull}
      <Typography display="inline-block" color="#f44336" component="span" variant={fontSize}>
        E
      </Typography>
      {bull}
      <Typography display="inline-block" color="#42a5f5" component="span" variant={fontSize}>
        R
      </Typography>
    </Box>
  )
}

export default Logo