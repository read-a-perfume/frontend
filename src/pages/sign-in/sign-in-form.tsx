import Box from '@mui/material/Box'
import Tab from '@mui/material/Tab'
import Tabs from '@mui/material/Tabs'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import TextField from '@mui/material/TextField'
import {styled} from '@mui/material'
import SignInOptions from './sign-in-options'
import SignInButtonGroup from './sign-in-button-group'
import useFormValidate from './use-form-validate'
import ErrorMessage from '@components/base/error-message'
import usePostSignIn from './hooks/use-post-sign-in'
import {FormProvider, useForm} from 'react-hook-form'

const defaultValue = {
  username: '',
  password: '',
}

const SignInForm = () => {
  const methods = useForm({
    defaultValues: defaultValue,
  })
  const {username, password} = useFormValidate(methods.control)
  const {mutate, isLoading} = usePostSignIn(methods.setError)

  const onSubmit = async () => {
    const usernameValue = username.field.value
    const passwordValue = password.field.value

    mutate({username: usernameValue, password: passwordValue})
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
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
                TabIndicatorProps={{sx: {background: 'black'}}}
              >
                <Tab label="개인용" />
              </Tabs>
            </SignInTypeList>
            <Box sx={{marginTop: '30px'}}>
              <Box>
                <SignInFormTextFiled
                  placeholder="아이디"
                  type="text"
                  {...username.field}
                  helperText={
                    <ErrorMessage
                      errorMessage={username.fieldState.error?.message}
                    />
                  }
                />
                <SignInFormTextFiled
                  placeholder="패스워드"
                  type="password"
                  {...password.field}
                  helperText={
                    <ErrorMessage
                      errorMessage={password.fieldState.error?.message}
                    />
                  }
                />
                <SignInOptions
                  label="로그인 유지"
                  option1="비밀번호 찾기"
                  option2="아이디 찾기"
                />
                <SignInButtonGroup isLoading={isLoading} />
              </Box>
            </Box>
          </SignInGrid>
        </Box>
      </form>
    </FormProvider>
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
    minHeight: '48px',
    boxSizing: 'border-box',
    marginBottom: '4px',
  },
  '&.MuiTextField-root > div': {
    width: '100%',
    minHeight: '48px',
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
