import React from 'react'
import { useHistory } from 'react-router-dom'
import Container from '@mui/material/Container'
import Logo from '../../components/Logo'
import SearchInput from '../../components/SearchInput'

const Home: React.FC = () => {
  let history = useHistory();

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      history.push('/search?q=' + encodeURI(searchValue))
    }
  }

  return (
    <Container
      maxWidth={false}
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Logo sx={{ pb: '20px' }} size="lg" />
      <SearchInput initialValue={""} onSearch={handleSearch} />
    </Container>
  )
}

export default Home