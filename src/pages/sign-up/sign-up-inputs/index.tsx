import {List, ListItem, styled} from '@mui/material'
import SignUpValidation from './sign-up-validation'
import useValidationForm from '../hooks/use-validation-form'
import {formData} from '../data.constant'
import SignUpIdCheck from '../sign-up-id-check'
import usePostIdCheck from '../hooks/use-post-id-check'

const SignupInputs = () => {
  const {username, password, confirmPassword, email} = useValidationForm()
  const {mutateCheckUserId} = usePostIdCheck({
    success: '사용 가능합니다',
    failed: '아이디 중복입니다.',
  })

  return (
    <List sx={{width: '100%'}}>
      <Item>
        <SignUpValidation
          placeholder={formData.username.placeholder}
          name="아이디"
          type="text"
          method={username}
          compoment={
            <SignUpIdCheck
              title="중복확인"
              value={username.field.value}
              handleClick={mutateCheckUserId}
            />
          }
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={formData.username.placeholder}
          type="password"
          method={password}
          name="비밀번호"
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={formData.username.placeholder}
          type="password"
          method={confirmPassword}
          name="비밀번호 확인"
        />
      </Item>
      <Item>
        <SignUpValidation
          placeholder={formData.username.placeholder}
          type="email"
          method={email}
          name="본인 확인 이메일"
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
