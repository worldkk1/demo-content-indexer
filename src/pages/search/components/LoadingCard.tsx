import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Skeleton from '@mui/material/Skeleton';

const LoadingCard: React.FC = () => {
  return (
    <Card
      sx={{
        boxShadow: "unset",
        marginBottom: "30px",
        width: '100%',
      }}
    >
      <CardContent
        sx={{
          paddingTop: 0,
          paddingBottom: 0,
          "&:last-child": {
            paddingBottom: 0,
          },
        }}
      >
        <Skeleton animation={false} />
        <Skeleton animation={false} />
        <Skeleton animation={false} />
      </CardContent>
    </Card>
  )
}

export default LoadingCard