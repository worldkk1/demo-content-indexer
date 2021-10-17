import React from 'react'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';

interface Props {
  link: string
  title: string
  snippet: string
}

const ResultCard: React.FC<Props> = ({ link, title, snippet }) => {
  return (
    <Card
      sx={{
        boxShadow: "unset",
        marginBottom: "30px",
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
        <Typography
          component="div"
          variant="body2"
          color="text.primary"
          gutterBottom
        >
          {link}
        </Typography>
        <Typography variant="h5" component="div" gutterBottom>
          <Link href={link} underline="hover">
            {title}
          </Link>
        </Typography>
        <Typography
          sx={{ display: 'inline' }}
          component="span"
          variant="body2"
          color="text.primary"
        >
          {snippet}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default ResultCard