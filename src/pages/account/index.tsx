import Banner from '@components/base/banner'
import {
  Box,
  FormControl,
  FormControlLabel,
  Radio,
  RadioGroup,
  TextField,
  styled,
} from '@mui/material'
import Title from './base/Title'
import MuiButton from '@components/base/mui-button'
import Calendar from 'react-calendar'
import { useState } from 'react'
import "./calendar.css";

type ValuePiece = Date | null;

type Value = ValuePiece | [ValuePiece, ValuePiece];

const Account = () => {

  const [value, onChange] = useState<Value>(new Date());

  console.log(value);


  return (
    <Container>
      <Banner />
      <Title title="자기 소개" />
      <textarea />
      <Title title="성별" />
      <FormControl>
        <RadioGroup defaultValue="female" name="radio-buttons-group" row>
          <FormControlLabel value="남성" control={<Radio />} label="남성" />
          <FormControlLabel value="여성" control={<Radio />} label="여성" />
          <FormControlLabel
            value="선택하지 않음"
            control={<Radio />}
            label="선택하지 않음"
          />
        </RadioGroup>
      </FormControl>
      <Title title="생년월일" />
      <h1>{`${value?.toString()}`}</h1>
      <Calendar value={value} onChange={onChange}/>
      <MuiButton title="저장하기" type="primary"/>
      <Title title="이메일" />
      <TextField label="이메일" variant="filled" />
      <MuiButton title="저장하기" type="primary"/>
      <Title title="비밀번호" />
      <TextField label="현재 비밀번호" variant="filled" />
      <TextField label="새 비밀번호" variant="filled" />
      <TextField label="새 비밀번호 확인" variant="filled" />
      <MuiButton title="저장하기" type="primary"/>
    </Container>
  )
}

export default Account

const Container = styled(Box)(({theme}) => ({
  backgroundColor: theme.palette.grey[100],
}))
