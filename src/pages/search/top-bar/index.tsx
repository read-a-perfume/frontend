import useInput from '@hooks/use-input'
import Autocomplete from '@mui/material/Autocomplete'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import styled from '@mui/material/styles/styled'

import {useController, useForm} from 'react-hook-form'

import SearchTabs from './search-tabs'
const inputLabelProps = {
  style: {
    fontSize: 14, // Adjust the font size as needed
  },
}
const TopBar = () => {
  const {handleMuiChange, value} = useInput('')

  const method = useForm({
    defaultValues: {
      perfume: {
        perfumeId: 0,
        perfumeNameWithBrand: '',
      },
    },
  })

  const autoSearch = useController({
    control: method.control,
    name: 'perfume',
  })

  return (
    <Box component="header" sx={{marginTop: '103px'}}>
      <Box sx={{display: 'flex', justifyContent: 'center'}}>
        <CustomAutoComplete
          disablePortal
          id="perfume"
          options={data}
          onChange={(_event, newValue) => {
            autoSearch.field.onChange(newValue)
          }}
          inputValue={value}
          onInputChange={handleMuiChange}
          value={autoSearch.field.value}
          sx={{width: 411}}
          autoHighlight
          loadingText="로딩중입니다"
          renderInput={params => (
            <TextField
              {...params}
              key={params.id}
              name="perfumeId"
              placeholder="향수를 선택해주세요."
              InputLabelProps={inputLabelProps}
              inputProps={{
                ...params.inputProps,
                autoComplete: 'disabled', // disable autocomplete and autofill
              }}
            />
          )}
          getOptionLabel={option => option.perfumeNameWithBrand}
          isOptionEqualToValue={(option, value) => {
            return option.perfumeId === value.perfumeId
          }}
          renderOption={(props, option) => (
            <>
              <Item {...props}>{option.perfumeNameWithBrand}</Item>
            </>
          )}
        />
      </Box>
      <SearchTabs />
    </Box>
  )
}

export default TopBar
const CustomAutoComplete = styled(Autocomplete)({
  '&': {
    boxSizing: 'border-box !important',
    background: ' #fff',
  },

  '.MuiInputBase-root': {
    position: 'relative',
    borderRadius: '10px',
    padding: 0,
    height: '40px',
  },
  '.MuiInputBase-input ': {
    border: 'none',
    padding: 0,
  },
  '.MuiOutlinedInput-root .MuiAutocomplete-input': {
    padding: 0,
    fontSize: '14px',
    paddingLeft: '24px',
  },
  ' .MuiInputLabel-root': {
    /* top: 50%;
        transform: translateY(-50%); */
  },
}) as typeof Autocomplete
const Item = styled('li')({
  fontSize: '14px',
  padding: '0 24px',
  background: '#fff',
  borderBottom: '1px solid #F1F1F5',
  boxSizing: 'content-box',
})

const data = [
  {perfumeNameWithBrand: '딥티크 롬브로단로 오 드 뚜왈렛', perfumeId: 1},
  {perfumeNameWithBrand: '딥티크 롬브로단로 오 드 퍼퓸', perfumeId: 2},
]
