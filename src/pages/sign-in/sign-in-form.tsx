import {
  Box,
  Tab,
  Tabs,
  Grid,
  styled,
  Typography,
  TextField,
} from '@mui/material'
import {SyntheticEvent, useCallback, useState} from 'react'
import useMutation from 'src/store/server/use-mutation'
import {useNavigate} from 'react-router-dom'
import SignInOptions from './sign-in-options'
import SignInButtonGroup from './sign-in-button-group'
import {postLogin} from 'src/store/server/auth/mutations'

const SignInForm = () => {
  const [value, setValue] = useState(0)

  const handleChange = useCallback(
    (event: SyntheticEvent, newValue: number) => {
      console.log(event, 'event')
      setValue(newValue)
    },
    [],
  )
  const nav = useNavigate()

  const {mutate} = useMutation({
    mutationFn: postLogin,
    mutationKey: ['sign-in'],
    options: {
      onError: error => alert(error),
      onSuccess: () => nav('/'),
    },
  })

  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const username = String(formData.get('username'))
    const password = String(formData.get('password'))

    if (username && password) {
      mutate({username, password})
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{width: '342px', margin: 'auto'}}>
        <SignInGrid item>
          <Title variant="h2">
            향기로움을 찾는 <br /> 사람들의 리뷰 모음집
          </Title>
        </SignInGrid>
        <SignInGrid item>
          <SignInTypeList>
            <Tabs
              variant="fullWidth"
              textColor="inherit"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{sx: {background: 'black'}}}
            >
              <Tab label="개인용" />
              <Tab label="기업용" />
            </Tabs>
          </SignInTypeList>
          <Box sx={{marginTop: '30px'}}>
            <Box>
              <SignInFormTextFiled
                placeholder="아이디"
                type="text"
                name="username"
              />
              <SignInFormTextFiled
                placeholder="패스워드"
                type="password"
                name="password"
              />
              <SignInOptions
                label="로그인 유지"
                option1="비밀번호 찾기"
                option2="아이디 찾기"
              />
              <SignInButtonGroup />
            </Box>
          </Box>
        </SignInGrid>
      </Box>
    </form>
  )
}

export default SignInForm

const SignInGrid = styled(Grid)(() => ({
  width: '100%',
}))

const Title = styled(Typography)(() => ({
  fontSize: ' 28px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineHeight: '150%',
  letterSpacing: '0.56px',
}))

const SignInTypeList = styled(Box)(() => ({
  borderBottom: 1,
  borderColor: 'divider',
}))

const SignInFormTextFiled = styled(TextField)(({theme}) => ({
  '&': {
    width: '100%',
    height: '48px',
    boxSizing: 'border-box',
    marginBottom: '4px',
  },
  '&.MuiTextField-root > div': {
    width: '100%',
    height: '48px',
    boxSizing: 'border-box',
    backgroundColor: theme.palette.grey[100],
  },
  '& input.MuiOutlinedInput-input': {
    color: '#000',
    fontSize: '14px',
  },
  MuiOutlinedInput: {
    input: {
      '&:-webkit-autofill': {
        background: 'rgb(232, 241, 250)',
      },
    },
  },
}))
