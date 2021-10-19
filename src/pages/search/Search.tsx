import React, { useEffect, useState } from 'react'
import { useLocation, useHistory } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container'
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ResultCard from './components/ResultCard'
import Logo from '../../components/Logo'
import SearchInput from '../../components/SearchInput'
import LoadingCard from './components/LoadingCard'
import LockedCurtain from './components/LockedCurtain'

interface ResultItem {
  cacheId: string
  displayLink: string
  formattedUrl: string
  htmlFormattedUrl: string
  htmlSnippet: string
  htmlTitle: string
  kind: string
  link: string
  pagemap: any
  snippet: string
  title: string
}

const Search: React.FC = () => {
  let history = useHistory();
  let location = useLocation();
  const urlParams = new URLSearchParams(location.search);
  const searchParam = urlParams.get('q') || '';
  const [searchResults, setSearchResults] = useState<ResultItem[]>([])
  const search = (searchValue: string) => {
    let endpoint = 'https://www.googleapis.com'
    // endpoint = 'http://localhost:8081'
    const key = process.env.REACT_APP_CSE_KEY
    const cx = process.env.REACT_APP_CSE_ID
    const q = searchValue
    const url = `${endpoint}/customsearch/v1?key=${key}&cx=${cx}&q=${q}`
    fetch(url).then(res => res.json())
      .then(res => {
        const { items } = res
        let results = items
        if (items.length > 3) {
          results = items.slice(0, 3)
        }
        setSearchResults(results)
      })
  }

  const handleSearch = (searchValue: string) => {
    if (searchValue) {
      history.push('/search?q=' + encodeURI(searchValue))
    }
  }

  const handleBackHome = () => {
    history.push('/')
  }

  useEffect(() => {
    if (searchParam) {
      search(searchParam)
    }
  }, [searchParam])

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color="inherit"
        sx={{
          boxShadow: 'unset',
          pt: '15px',
          pb: '15px',
          borderBottom: '1px solid #ebebeb'
        }}
      >
        <Toolbar>
          <Box
            sx={{
              mr: "32px"
            }}
          >
            <Logo onClick={handleBackHome} />
          </Box>
          <SearchInput initialValue={searchParam} onSearch={handleSearch} />
        </Toolbar>
      </AppBar>
      {(searchResults && searchResults.length > 0) &&
        <Container maxWidth="md">
          <List sx={{ width: '100%', maxWidth: 652 }}>
            {searchResults.map((result, index) => (
              <ListItem key={index} alignItems="flex-start">
                <ResultCard
                  link={result.link}
                  title={result.title}
                  snippet={result.snippet}
                />
              </ListItem>
            ))}
          </List>
          <Box position="relative">
            <List sx={{ width: '100%', maxWidth: 652 }}>
              {[3, 4, 5].map(item => (
                <ListItem key={item} alignItems="flex-start">
                  <LoadingCard />
                </ListItem>
              ))}
            </List>
            <LockedCurtain />
          </Box>
        </Container>
      }
    </Box>
  )
}

export default Search