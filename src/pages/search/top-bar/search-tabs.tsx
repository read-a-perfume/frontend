import {Box, Tabs} from '@mui/material'
import SearchTab from './search-tab'

const SearchTabs = () => {
  const handleChange = (event, newValue) => {
    // Handle tab change event here
    console.log(newValue, 'valuwe')
  }

  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Tabs
        role="navigation"
        onChange={handleChange}
        sx={{marginTop: '44px', '& .MuiTabs-flexContainer': {gap: '10px'}}}
      >
        <SearchTab label="ALL" to="?category=all" value="all" />
        <SearchTab label="Brand" to="?category=brand" value="brand" />
        <SearchTab label="향수 노트별" to="?category=notes" value="notes" />
      </Tabs>
    </Box>
  )
}

export default SearchTabs
