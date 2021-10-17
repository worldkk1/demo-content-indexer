import React, { useState } from 'react'
import Paper from '@mui/material/Paper'
import InputBase from '@mui/material/InputBase'
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';

interface Props {
  initialValue: string
  onSearch?: (...args: any[]) => any
}

const SearchInput: React.FC<Props> = ({ initialValue, onSearch }) => {
  const [searchValue, setSearchValue] = useState<string>(initialValue)

  const handleSearch = () => {
    if (onSearch) {
      onSearch(searchValue)
    }
  }

  return (
    <Paper
      component="div"
      sx={{
        p: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 538,
        height: 44,
        borderRadius: 24
      }}
    >
      <InputBase
        sx={{ ml: "24px", flex: 1 }}
        value={searchValue}
        onChange={e => setSearchValue(e.target.value)}
        onKeyPress={e => {
          if (e.key === 'Enter') {
            e.preventDefault()
            handleSearch()
          }
        }}
      />
      <IconButton sx={{ p: '10px' }} aria-label="search" onClick={handleSearch}>
        <SearchIcon />
      </IconButton>
    </Paper>
  )
}

export default SearchInput