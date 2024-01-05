import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import {Box, styled} from '@mui/material'
import {IfUserNameProps} from '@pages/sign-up/types'
import UserNameCheckButton from './user-name-check-button'

const UserNameSection = ({username, handleUsernameCheck}: IfUserNameProps) => {
  return (
    <TextFiledWrapper>
      <SignUpLabel label="아이디" />
      <SignUpTextFiled
        type="text"
        method={username}
        placeholder="아이디 체크"
      />
      <UserNameCheckButton
        title="중복체크"
        value={username.field.value}
        handleIdDuplicateCheck={handleUsernameCheck}
      />
    </TextFiledWrapper>
  )
}

export default UserNameSection
const TextFiledWrapper = styled(Box)(({theme}) => ({
  display: 'flex',
  flexDirection: 'column',
  width: '342px',
  position: 'relative',
  '& input': {
    fontSize: theme.typography.body3,
  },
}))
