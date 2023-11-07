import {FormControl, RadioGroup, TextField} from '@mui/material'
import Autocomplete from '@mui/material/Autocomplete'
import SliderRating from './slider'
import styled from '@emotion/styled'
import {useState} from 'react'
import RadioRoundedButton from './radio-rounded-button'
import {top100Films} from './form-writer-start.constant'

const FormWriterStart = ({
  handleFormDataChange,
  formValues,
  handleNextPage,
}: any) => {
  const UserProfile = () => {
    return (
      <Profile>
        <i>아이콘</i>
        <span>Like_perfume</span>
      </Profile>
    )
  }
  const inputLabelProps = {
    style: {
      fontSize: 14, // Adjust the font size as needed
    },
  }

  return (
    <>
      <FormControl component="fieldset">
        <UserProfile />
        <section>
          <Title>리뷰하고싶은 제품을 찾아주세요</Title>
          <PerfumeSearch
            disablePortal
            id="search"
            options={top100Films}
            onChange={handleFormDataChange}
            sx={{width: 411}}
            renderInput={params => (
              <TextField
                {...params}
                placeholder="향수를 선택해주세요."
                InputLabelProps={inputLabelProps}
              />
            )}
            renderOption={(props, option: any) => (
              <>
                <Item {...props}>{option.label}</Item>
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
            value={formValues.radioGroup1}
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
            value={formValues.radioGroup2}
            onChange={handleFormDataChange}
          >
            <RadioRoundedButton title="선택지1" />
            <RadioRoundedButton title="선택지2" />
            <RadioRoundedButton title="선택지3" />
            <RadioRoundedButton title="선택지4" />
          </CustomRadioGroup>
        </section>
        <section>
          <Title>어떤 계절하고 잘 어울린다고 생각하나요?</Title>
          <CustomRadioGroup
            row
            aria-label="향수"
            name="season"
            value={formValues.radioGroup2}
            onChange={handleFormDataChange}
          >
            <RadioRoundedButton title="봄" />
            <RadioRoundedButton title="여름" />
            <RadioRoundedButton title="가을" />
            <RadioRoundedButton title="겨울" />
          </CustomRadioGroup>
        </section>
        <div onClick={handleNextPage}>
          <RoundButton text="다음으로" width="full" />
        </div>
      </FormControl>
    </>
  )
}

export default FormWriterStart

const Profile = styled.div({
  display: 'flex',
  paddingBottom: '41px',

  '& > i': {
    fontSize: 0,
  },
  span: {
    fontSize: '16px',
  },
})

const Item = styled.li({
  fontSize: '14px',
  padding: '8px 24px',
  background: '#fff',
  borderBottom: '1px solid #F1F1F5',
  boxSizing: 'content-box',
})

const Title = styled.h3({
  fontSize: '14px',
  paddingBottom: '24px',
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

interface RoundButtonProps {
  text: string
  width?: string
}

const RoundButton = ({text, width}: RoundButtonProps) => {
  const [isActive, setIsActive] = useState(false)

  const handleActive = () => {
    setIsActive(!isActive)
  }

  interface StyleProps {
    isActive: boolean
    width?: string
  }

  const CustomButton = styled.button<StyleProps>`
    display: inline-flex;
    width: 96px;
    width: ${props => props.width === 'full' && '100%'};
    height: 40px;
    padding: 5px 16px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    flex-shrink: 0;
    border-radius: 10px;
    border: 2px solid gray;
    border-color: ${props => (props.isActive ? '#fe7156' : '#EDEDED')};
    color: ${props => (props.isActive ? '#fe7156' : '#A9A9A9')};
    background: #fff;
  `

  return (
    <CustomButton isActive={isActive} onClick={handleActive} width={width}>
      {text}
    </CustomButton>
  )
}
