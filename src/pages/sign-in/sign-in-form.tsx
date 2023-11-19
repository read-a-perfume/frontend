import {
  Box,
  Tab,
  Tabs,
  Button,
  Grid,
  styled,
  Typography,
  OutlinedInput,
} from '@mui/material'

import {SyntheticEvent, useCallback, useState} from 'react'
import {useTheme} from '@mui/material/styles'
import instance from '@api/instance'
import useMutation from '@hooks/global-store/server/mutations/use-mutation'
import {useNavigate} from 'react-router-dom'

interface TabItemProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabItem(props: TabItemProps) {
  const {children, value, index} = props

  return (
    <Box sx={{width: '100%'}} hidden={value !== index}>
      {value === index && <Typography>{children}</Typography>}
    </Box>
  )
}

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
  const theme = useTheme()

  interface FetchLoginProps {
    username: any
    password: any
  }

  const fetchLogin = async (data: FetchLoginProps) => {
    return await instance.post('/login', {...data})
  }
  const {mutate} = useMutation({
    mutationFn: fetchLogin,
    mutationKey: ['sign-in'],
    options: {
      onError: error => alert(error),
    },
  })

  const onSubmit = async event => {
    event.preventDefault()
    const formData = new FormData(event.target)
    const username = formData.get('username')
    const password = formData.get('password')

    console.log(username, 'username')
    mutate(
      {username, password},
      {
        onSuccess: () => nav('/'),
      },
    )
  }

  return (
    <form onSubmit={onSubmit}>
      <Box sx={{width: '342px', margin: 'auto'}}>
        <DialogGridContainer container spacing={1}>
          <DialogGrid item>
            <DialogGridSubTitle variant="h2">
              향기로움을 찾는 사람들의 <br /> 리뷰 모음집
            </DialogGridSubTitle>
          </DialogGrid>
          <DialogGrid item>
            <TabBox>
              <Tabs
                variant="fullWidth"
                textColor="inherit"
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{style: {background: 'black'}}}
              >
                <Tab label="개인용"></Tab>
                <Tab label="기업용"></Tab>
              </Tabs>
            </TabBox>
            <TabItem value={value} index={0}>
              <Box sx={{py: 1}}>
                <MUITextFiled
                  theme={theme}
                  placeholder="아이디"
                  type="text"
                  name="username"
                />
                <MUITextFiled
                  theme={theme}
                  placeholder="패스워드"
                  type="password"
                  name="password"
                />
                <LoginButton
                  variant="contained"
                  customColor="#F8DB52"
                  type="submit"
                >
                  로그인
                </LoginButton>
                <LoginButton
                  variant="outlined"
                  customColor="white"
                  sx={{mt: 1}}
                >
                  Google 로그인
                </LoginButton>
              </Box>
            </TabItem>
            <TabItem value={value} index={1}>
              기업 로그인 폼
            </TabItem>
          </DialogGrid>
        </DialogGridContainer>
      </Box>
    </form>
  )
}

export default SignInForm

interface LoginButtonProps {
  customColor: '#F8DB52' | 'white'
}

const DialogGridContainer = styled(Grid)(() => ({}))
const DialogGrid = styled(Grid)(() => ({
  width: '100%',
}))

const DialogGridSubTitle = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontSize: ' 28px',
  fontStyle: 'normal',
  fontWeight: '400',
  lineheight: '150%' /* 42px */,
  letterSpacing: '0.56px',
}))

const TabBox = styled(Box)(() => ({
  borderBottom: 1,
  borderColor: 'divider',
}))

const LoginButton = styled(Button)<LoginButtonProps>(({...props}) => ({
  boxShadow: 'none',
  width: '100%',
  background: props.customColor,
  color: 'black',
  borderColor: '#EFEFEF',
  '&:hover': {
    borderColor: '#EFEFEF',
  },
}))

const MUITextFiled = styled(OutlinedInput)(({theme}) => ({
  '&.MuiInputBase-root': {
    width: 342,
    height: 48,
    fontSize: theme.typography.body3,
    boxSizing: 'border-box',
    padding: 0,
    backgroundColor: theme.palette.grey[100],
  },
  '& > .MuiOutlinedInput-notchedOutline': {
    color: '#000',
  },
}))
