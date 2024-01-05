import {Box} from '@mui/material'
import TopBar from './top-bar'
import SearchContent from './search-content'

const SearchPage = () => {
  return (
    <div>
      <Box
        sx={{
          width: '1200px',
          margin: 'auto',
          border: '1px solid black',
          height: '100vh',
        }}
      >
        <TopBar />
        <SearchContent />
      </Box>
    </div>
  )
}

export default SearchPage
