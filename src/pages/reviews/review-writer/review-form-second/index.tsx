import {FormControl, RadioGroup, TextField, styled} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import SliderRating from './slider'
import RadioRoundedButton from '../radio-rounded-button'
import useQuery from 'src/store/server/use-query'
import {fetchPerfumeSearch} from 'src/store/server/reviews/queries'
import {useState} from 'react'

const durations = ['1~3시간 정도', '4~6시간 정도', '7~9시간 정도', '9시간 이상']

const ReviewFormSecond = ({
  handleFormDataChange,
  formValues,
  handleAutoComplete,
}: any) => {
  const [search, setSearch] = useState('')
  const inputLabelProps = {
    style: {
      fontSize: 14, // Adjust the font size as needed
    },
  }

  // const handleSearch = async (event: React.ChangeEvent<HTMLInputElement>) => {
  //   const target = event.target
  //   if (target.value && target.value.length > 1) {
  //     const res = await fetchPerfumeSearch(event.target.value)
  //     console.log(res, 'res')
  //     setSearchData(res)
  //   }
  // }

  const handleUpdate = (event: any) => {
    const target = event.target
    const value: string = target.value
    if (target && value && value.length > 0) {
      setSearch(value)
    }
  }

  const {data} = useQuery({
    queryFn: () => fetchPerfumeSearch(search),
    queryKey: [`search/${search}-key`],
  })
  const options =
    data && data.length > 0
      ? data.map(item => ({
          id: item.perfumeId,
          title: item.perfumeNameWithBrand,
        }))
      : []
  return (
    <>
      <FormControl component="fieldset">
        <section>
          <Title>리뷰하고싶은 제품을 찾아주세요</Title>
          <PerfumeSearch
            disablePortal
            id="search"
            options={options}
            onInputChange={event => handleUpdate(event)}
            onChange={handleAutoComplete}
            sx={{width: 411}}
            renderInput={params => (
              <TextField
                {...params}
                name="perfumeId"
                placeholder="향수를 선택해주세요."
                InputLabelProps={inputLabelProps}
              />
            )}
            getOptionLabel={(option: any) => option.title}
            renderOption={(props, option: any) => (
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

const PerfumeSearch = styled(Autocomplete)`
  box-sizing: border-box !important;
  background: #fff;

  .MuiInputBase-root {
    position: relative;
    border-radius: 10px;
    padding: 0;
    height: 40px;
  }

  .MuiInputBase-input {
    border: none;
    padding: 0;
  }
  .MuiOutlinedInput-root .MuiAutocomplete-input {
    padding: 0;
    font-size: 14px;
    padding-left: 24px;
  }
  .MuiInputLabel-root {
    /* top: 50%;
    transform: translateY(-50%); */
  }
`
