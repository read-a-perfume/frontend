import Button from '@components/base/button.js'
import {Typography} from '@mui/material'
import {theme} from '@theme/index'
import {useNavigate} from 'react-router-dom'
import {SendEmailContainer} from './find-password.style'

const SendEmail = () => {
  const navigate = useNavigate()

  return (
    <SendEmailContainer>
      <Typography
        fontSize={theme.typography.h1.fontSize}
        fontWeight="700"
        style={{marginBottom: '16px'}}
      >
        이메일로 새 비밀번호를
        <br />
        보내드렸습니다.
      </Typography>
      <Typography
        fontSize={theme.typography.body2.fontSize}
        fontWeight="500"
        color={theme.palette.grey[800]}
        style={{marginBottom: '48px'}}
      >
        이메일에 써있는 비밀번호로 로그인할 수 있어요.
        <br />
        비밀번호는 내 정보에서 변경할 수 있어요!
      </Typography>
      <Button
        text="로그인하기"
        fullWidth
        fontSize="lg"
        onClick={() => navigate('/login')}
        backgroundColor="secondary"
      />
    </SendEmailContainer>
  )
}

export default SendEmail
