import CustomIcons from '@assets/icons/custom-Icons.js'
import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'
import { theme } from '@theme/index.js'
import Calendar from './calendar.js'
import 'react-datepicker/dist/react-datepicker.css'
import { InputProps } from './index.js'
import { Category, Title } from './index.styles.js'

interface PrivacyProps {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}

const Privacy: React.FC<PrivacyProps> = ({
  inputs,
  setInputs,
}) => {
  return (
    <div>
      <Title style={{marginTop: 36, marginBottom: 20}}>개인정보</Title>
      <Category style={{marginBottom: 10}}>생년월일</Category>
      <FlexBox alignItems="center" style={{marginBottom: 24}}>
        <div>
          <Calendar setInputs={setInputs} inputs={inputs} />
        </div>
        <CalendarIconBox>
          <CustomIcons.CalendarIcon />
        </CalendarIconBox>
      </FlexBox>
      <Category>성별</Category>
      <FlexBox gap="36px" style={{ marginTop: 10}}>
        <FlexBox alignItems="center">
          {inputs.gender === 'male' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'male'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>남성</GenderText>
        </FlexBox>
        <FlexBox alignItems="center">
          {inputs.gender === 'female' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'female'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>여성</GenderText>
        </FlexBox>
        <FlexBox alignItems="center">
          {inputs.gender === 'none' ? (
            <CustomIcons.RadioChecked />
          ) : (
            <div
              role="presentation"
              style={{cursor: 'pointer', display: 'flex'}}
              onClick={() => setInputs({...inputs, gender: 'none'})}
            >
              <CustomIcons.RadioUnchecked />
            </div>
          )}
          <GenderText>선택하지않음</GenderText>
        </FlexBox>
      </FlexBox>
    </div>
  )
}

const GenderText = styled(Typography)({
  marginLeft: 6,
  fontSize: 14,
  fontWeight: '400',
  color: theme.palette.grey[600],
})

const CalendarIconBox = styled.div({
  marginLeft: -36,
  zIndex: 1,
  background: 'white',
  height: 20,
  width: 20,
  marginTop: -2,
})


export default Privacy
