import {Autocomplete, TextField, styled} from '@mui/material'
import ReviewFormSubTitle from '../base/review-form-sub-title'
import {useMemo, useState} from 'react'
import useFetchPerfumeSearch from '../hooks/use-fetch-perfume-search'
import {useController, useFormContext} from 'react-hook-form'
const inputLabelProps = {
  style: {
    fontSize: 14, // Adjust the font size as needed
  },
}
const PerfumeSearch = ({handleAutoComplete}: any) => {
  const [search, setSearch] = useState('')
  const {control} = useFormContext()
  const {field: perfume} = useController({
    name: 'perfume',
    control,
  })
  const {options, isLoading} = useFetchPerfumeSearch({
    search: search,
  })

  return (
    <section>
      <ReviewFormSubTitle title="리뷰하고싶은 제품을 찾아주세요" />
      <CustomAutoComplete
        disablePortal
        id="perfume"
        options={options}
        onChange={(_event, newValue) => {
          perfume.onChange(newValue)
        }}
        inputValue={search}
        onInputChange={(_evt, newValue) => setSearch(newValue)}
        value={perfume.value}
        sx={{width: 411}}
        autoHighlight
        loading={isLoading}
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
        getOptionLabel={option => option.name}
        isOptionEqualToValue={(option, value) => {
          return option.id === value.id
        }}
        renderOption={(props, option) => (
          <>
            <Item {...props}>{option.name}</Item>
          </>
        )}
      />
    </section>
  )
}
export default PerfumeSearch
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
