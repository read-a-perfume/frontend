import {List, ListItem, styled} from '@mui/material'
import SignUpValidation from './sign-up-validation'
import SignUpIdCheck from '../sign-up-id-check'
import SignUpEmailCheck from '../sign-up-email-check'
import usePostCheckDuplicate from '../hooks/use-post-check-duplicate '
import useFormValidate from '../hooks/use-form-validate'
import signUpvalidate from '../utils/sign-up-validate'

const SignupInputs = () => {
  const {username, password, confirmPassword, email} = useFormValidate()
  const {handleIdDuplicateCheck, handleEmailDuplicateCheck} =
    usePostCheckDuplicate({
      successMessage: '사용 가능합니다',
      failedMessage: '아이디 중복입니다.',
      userId:username.field.value
    })

  return (
    <List sx={{width: '100%'}}>
      <Item>
        <SignUpValidation
          placeholder={signUpvalidate.username.placeholder}
          name="아이디"
          type="text"
          method={username}
          compoment={
            <SignUpIdCheck
              title="중복확인"
              value={username.field.value}
              handleIdDuplicateCheck={handleIdDuplicateCheck}
            />
          }
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={signUpvalidate.username.placeholder}
          type="password"
          method={password}
          name="비밀번호"
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={signUpvalidate.username.placeholder}
          type="password"
          method={confirmPassword}
          name="비밀번호 확인"
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={signUpvalidate.username.placeholder}
          type="email"
          method={email}
          name="본인 확인 이메일"
          compoment={
            <SignUpEmailCheck
              title="인증"
              value={email.field.value}
              handleEmailDuplicateCheck={handleEmailDuplicateCheck}
            />
          }
        />
      </Item>
    </List>
  )
}

export default SignupInputs

const Item = styled(ListItem)({
  display: 'flex',
  alignItems: 'end',
  gap: '20px',
})
