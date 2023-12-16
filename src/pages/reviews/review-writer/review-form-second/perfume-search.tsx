import {Autocomplete, TextField, styled} from '@mui/material'
import ReviewFormSubTitle from '../base/review-form-sub-title'
import useReviewFormSearch from '../hooks/use-review-form-search'
import {useState} from 'react'
const inputLabelProps = {
  style: {
    fontSize: 14, // Adjust the font size as needed
  },
}
const PerfumeSearch = ({handleAutoComplete}) => {
  const [search, setSearch] = useState('')

  const {options} = useReviewFormSearch({search})
  const handleChangeInput = (event: any) => {
    const target = event.target
    const value: string = target.value
    if (target && value && value.length > 0) {
      setSearch(value)
    }
  }
  return (
    <section>
      <ReviewFormSubTitle title="리뷰하고싶은 제품을 찾아주세요" />
      <CustomAutoComplete
        disablePortal
        id="search"
        options={options}
        onInputChange={event => handleChangeInput(event)}
        onChange={handleAutoComplete}
        sx={{width: 411}}
        autoHighlight
        renderInput={params => (
          <TextField
            {...params}
            name="perfumeId"
            placeholder="향수를 선택해주세요."
            InputLabelProps={inputLabelProps}
          />
        )}
        getOptionLabel={option => option.title}
        renderOption={(props, option) => (
          <>
            <Item {...props}>{option.title}</Item>
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
