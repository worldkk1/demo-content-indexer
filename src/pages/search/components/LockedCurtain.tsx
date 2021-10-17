import React from 'react'
import Paper from '@mui/material/Paper'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActions from '@mui/material/CardActions'
import Button from '@mui/material/Button'
import LockIcon from '@mui/icons-material/Lock';

const LockedCurtain: React.FC = () => {
  return (
    <React.Fragment>
      <Paper
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          maxWidth: 652,
          boxShadow: 'unset',
          backdropFilter: "blur(3px)",
          backgroundColor:'rgba(0, 0, 30, 0.4)',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Card>
          <CardContent>
            <Typography variant="h5" component="div">
              This content is locked
            </Typography>
          </CardContent>
          <CardActions>
            <Button startIcon={<LockIcon />}>
              Unlock now
            </Button>
          </CardActions>
        </Card>
      </Paper>
    </React.Fragment>
  )
}

export default LockedCurtain