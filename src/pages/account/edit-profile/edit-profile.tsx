import {
  Avatar,
  Box,
  FormControlLabel,
  Radio,
  RadioGroup,
  Stack,
  TextField,
  Typography,
  styled,
} from '@mui/material'
import {useQuery} from '@tanstack/react-query'
import {fetchCurUser} from './queryfn'

const EditProfile = () => {
  const {data: curUser} = useQuery(['curuser'], () => fetchCurUser())

  return (
    <>
      {curUser !== undefined && (
        <Container>
          <Avatar
            src={curUser.thumbnail}
            sx={{marginBottom: '48px', width: '104px', height: '104px'}}
            alt={curUser.username}
          />
          <Title>닉네임</Title>
          <SubTitle>닉네임 수정</SubTitle>
          <Input width="257px" placeholder="닉네임 수정" />
          <SubTitle>내 소개</SubTitle>
          <Input width="717px" placeholder="내 소개" />
          <SubTitle>성별</SubTitle>
          <RadioGroup row sx={{marginBottom: '109px'}}>
            <FormControlLabel
              value="남성"
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
              }
              label="남성"
            />
            <FormControlLabel
              value="여성"
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
              }
              label="여성"
            />
            <FormControlLabel
              value="선택하지 않음"
              control={
                <Radio
                  sx={{
                    '&.Mui-checked': {
                      color: 'black',
                    },
                  }}
                />
              }
              label="선택하지 않음"
            />
          </RadioGroup>
          <Title>아이디 관리</Title>
          <SubTitle>아이디</SubTitle>
          <Input placeholder="아이디" autoComplete="off" />
          <SubTitle>비밀번호</SubTitle>
          <Stack>
            <PwInput
              placeholder="현재 비밀번호"
              type="password"
              autoComplete="new-password"
            />
            <PwInput placeholder="새 비밀번호" type="password" />
            <PwInput placeholder="세 비밀번호 확인" type="password" />
          </Stack>
        </Container>
      )}
    </>
  )
}

export default EditProfile

const Container = styled(Box)(() => ({
  marginLeft: '63px',
  paddingTop: '170px',
}))

const Title = styled(Typography)(({theme}) => ({
  color: '#000',
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 600,
  marginBottom: '25px',
}))

const SubTitle = styled(Typography)(({theme}) => ({
  color: '#303030',
  fontSize: theme.typography.body3.fontSize,
  fontWeight: 500,
  marginBottom: '6px',
}))

const Input = styled(TextField)<{width?: string}>(
  ({width = '342px', theme}) => ({
    '& .MuiOutlinedInput-root': {
      maxHeight: '48px',
      width: width,
      fontWeight: 500,
      fontSize: theme.typography.body3.fontSize,
      marginBottom: '20px',
    },
  }),
)

const PwInput = styled(Input)(({theme}) => ({
  '& .MuiOutlinedInput-root': {
    backgroundColor: theme.palette.grey[200],
    borderColor: theme.palette.grey[300],
  },
  '& .Mui-focused': {
    backgroundColor: '#fff',
  },
}))
