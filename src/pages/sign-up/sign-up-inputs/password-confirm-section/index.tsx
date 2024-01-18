import Box from '@mui/material/Box'
import {styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import {IfPasswordConfirmProps} from '@pages/sign-up/types'

const PasswordConfirmSection = ({passwordConfirm}: IfPasswordConfirmProps) => {
  return (
    <TextFiledWrapper>
      <SignUpLabel label="비밀번호 재확인" />
      <SignUpTextFiled
        type="password"
        method={passwordConfirm}
        placeholder="비밀번호 입력하세요"
      />
    </TextFiledWrapper>
  )
}

export default PasswordConfirmSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
