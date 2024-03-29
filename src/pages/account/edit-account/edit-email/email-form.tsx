import Box from '@mui/material/Box'
import FormLabel from '@pages/account/base/form-label'
import {Input} from '@pages/account/base/input'
import SettingButton from '@pages/account/base/setting-button'
import useEditEmailForms from '../hook/use-edit-email-forms'
import {useContext} from 'react'
import TypingContext from '../util/typing-context'
import ErrorMessage from '@components/base/error-message'

const EmailForm = () => {
  const {email} = useEditEmailForms()
  const {isTyping} = useContext(TypingContext)

  return (
    <>
      <FormLabel>본인 확인 이메일</FormLabel>
      <Box
        sx={{
          display: 'flex',
          gap: '27px',
          alignItems: 'center',
          marginBottom: '40px',
        }}
      >
        <Input
          type="email"
          {...email.field}
          disabled={isTyping}
          sx={{marginBottom: 0}}
          helperText={
            <ErrorMessage
              errorMessage={email.formState.errors.email?.message}
              sx={{marginTop: '2px', marginBottom: '0.5em', minHeight: '2em'}}
            />
          }
        />
        <SettingButton type="submit">
          {isTyping ? '재전송' : '인증번호 받기'}
        </SettingButton>
      </Box>
    </>
  )
}

export default EmailForm
