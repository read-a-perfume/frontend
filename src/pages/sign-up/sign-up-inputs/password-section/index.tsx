import {Box, styled} from '@mui/material'
import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import {IfPasswordProps} from '@pages/sign-up/types'

const PasswordSection = ({password}: IfPasswordProps) => {
  return (
    <TextFiledWrapper>
      <SignUpLabel label="비밀번호" />
      <SignUpTextFiled
        type="password"
        method={password}
        placeholder="비밀번호 입력하세요"
      />
    </TextFiledWrapper>
  )
}

export default PasswordSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
