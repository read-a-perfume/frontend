import {FormControl, RadioGroup, TextField, styled} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import SliderRating from './slider'
import RadioRoundedButton from '../radio-rounded-button'
import {useState} from 'react'
import useReviewFormSearch from '../hooks/use-review-form-search'
const durations = ['1~3시간 정도', '4~6시간 정도', '7~9시간 정도', '9시간 이상']
const inputLabelProps = {
  style: {
    fontSize: 14, // Adjust the font size as needed
  },
}
const ReviewFormSecond = ({
  handleFormDataChange,
  formValues,
  handleAutoComplete,
}: any) => {
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
    <>
      <FormControl component="fieldset">
        <section>
          <Title>리뷰하고싶은 제품을 찾아주세요</Title>
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
        <section>
          <Title>보통 어떤 날에 뿌리나요?</Title>
          <CustomRadioGroup
            row
            aria-label="향수"
            name="dayType"
            value={formValues.dayType}
            onChange={handleFormDataChange}
          >
            <RadioRoundedButton title="데일리" />
            <RadioRoundedButton title="위클리" />
            <RadioRoundedButton title="특별한 날" />
            <RadioRoundedButton title="여행용" />
          </CustomRadioGroup>
        </section>
        <section>
          <Title>이 향수의 확산력은 어떤가요?</Title>
          <SliderRating />
        </section>
        <section>
          <Title>이 향수의 지속력은 어떤가요?</Title>
          <CustomRadioGroup
            row
            aria-label="향수"
            name="duration"
            value={formValues.duration}
            onChange={handleFormDataChange}
          >
            {durations.map(title => (
              <RadioRoundedButton title={title} />
            ))}
          </CustomRadioGroup>
        </section>
        <section>
          <Title>어떤 계절하고 잘 어울린다고 생각하나요?</Title>
          <CustomRadioGroup
            row
            aria-label="향수"
            name="season"
            value={formValues.season}
            onChange={handleFormDataChange}
          >
            <RadioRoundedButton title="봄" />
            <RadioRoundedButton title="여름" />
            <RadioRoundedButton title="가을" />
            <RadioRoundedButton title="겨울" />
          </CustomRadioGroup>
        </section>
      </FormControl>
    </>
  )
}

export default ReviewFormSecond

const Item = styled('li')({
  fontSize: '14px',
  padding: '0 24px',
  background: '#fff',
  borderBottom: '1px solid #F1F1F5',
  boxSizing: 'content-box',
})

const Title = styled('h3')({
  fontSize: '14px',
  marginTop: 0,
})

const CustomRadioGroup = styled(RadioGroup)({
  display: 'flex',
  justifyContent: 'space-between',
  '& .MuiFormControlLabel-root': {
    margin: 0,
  },
})

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
