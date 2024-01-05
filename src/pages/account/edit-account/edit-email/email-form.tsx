import {Box} from '@mui/material'
import FormLabel from '@pages/account/base/form-label'
import {Input} from '@pages/account/base/input'
import SettingButton from '@pages/account/base/setting-button'
import useEditEmailForms from '../hook/use-edit-email-forms'
import {useContext} from 'react'
import TypingContext from '../util/typing-context'

const EmailForm = () => {
  const {email} = useEditEmailForms()
  const {isTyping} = useContext(TypingContext)

  return (
    <>
      <FormLabel>본인 확인 이메일</FormLabel>
      <Box sx={{display: 'flex', gap: '27px', alignItems: 'center'}}>
        <Input type="email" {...email.field} disabled={isTyping} />
        <SettingButton
          type="submit"
          sx={{marginBottom: '20px'}}
          disabled={isTyping}
        >
          {'인증번호 받기'}
        </SettingButton>
      </Box>
    </>
  )
}

export default EmailForm
