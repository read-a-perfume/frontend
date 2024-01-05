import SignUpLabel from '@pages/sign-up/base/sign-up-label'
import SignUpTextFiled from '@pages/sign-up/base/sign-up-text-filed'
import {Box, styled} from '@mui/material'
import {IfUserNameProps} from '@pages/sign-up/types'
import UserNameCheckButton from './user-name-check-button'
import {useRecoilValue} from 'recoil'
import {SignUpAtoms} from 'src/store/client/auth'

const UserNameSection = ({username, handleUserNameConfirm}: IfUserNameProps) => {
  const isSignUpChecks = useRecoilValue(SignUpAtoms)
  const isAuthCheck = isSignUpChecks.isUserNameCheck
  console.log(isSignUpChecks, '체크')
  // const updateIsUserNameCheck = (isCheck: boolean) => {
  //   setValue('usernameCheck', isCheck)
  // }

  return (
    <TextFiledWrapper>
      <SignUpLabel label="아이디" />
      <SignUpTextFiled
        type="text"
        method={username}
        placeholder="아이디 체크"
        isAuthCheck={isAuthCheck}
      />
      <UserNameCheckButton
        beforeTitle="인증"
        afterTitle="인증완료"
        value={username.field.value}
        handleUserNameConfirm={handleUserNameConfirm}
        isAuthCheck={isAuthCheck}
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
