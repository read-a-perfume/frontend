import {Box} from '@mui/material'
import {Input} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditEmailForms from '../hook/use-edit-email-forms'
import TypingContext from '../util/typing-context'
import {useContext} from 'react'
import SettingButton from '@pages/account/base/setting-button'
import usePostEmail from '../hook/use-post-email'
import LoadingOverlay from '@components/base/loading-overlay'

const ValidationCodeForm = () => {
  const {validationCode, methods} = useEditEmailForms()
  const {isTyping, setIsTyping} = useContext(TypingContext)
  const {onEmailCheckSubmit,emailCheckLoading} = usePostEmail()


  return (
    <Box sx={{height: '110px'}}>
      {isTyping && (
        <> 
          {emailCheckLoading && <LoadingOverlay/>}
          <Box sx={{display: 'flex', gap: '27px', alignItems: 'center'}}>
            <Input placeholder="인증 번호 입력" {...validationCode.field} />
            <SettingButton
              sx={{marginBottom: '20px'}}
              onClick={methods.handleSubmit(onEmailCheckSubmit)}
            >
              재전송
            </SettingButton>
            <SettingButton
              sx={{marginBottom: '20px'}}
              onClick={() => setIsTyping(false)}
            >
              이메일 변경
            </SettingButton>
          </Box>
          <SaveButton>저장하기</SaveButton>
        </>
      )}
    </Box>
  )
}

export default ValidationCodeForm

