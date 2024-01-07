import {Box} from '@mui/material'
import {Input} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditEmailForms from '../hook/use-edit-email-forms'
import TypingContext from '../util/typing-context'
import {useContext} from 'react'
import SettingButton from '@pages/account/base/setting-button'
import ErrorMessage from '@components/base/error-message'

const ValidationCodeForm = () => {
  const {validationCode} = useEditEmailForms()
  const {isTyping, setIsTyping} = useContext(TypingContext)

  return (
    <Box sx={{height: '110px'}}>
      {isTyping && (
        <>
          <Box
            sx={{
              display: 'flex',
              gap: '27px',
              alignItems: 'center',
              marginBottom: '40px',
            }}
          >
            <Input
              placeholder="인증 번호 입력"
              {...validationCode.field}
              helperText={
                <ErrorMessage
                  errorMessage={
                    validationCode.formState.errors.validationCode?.message
                  }
                  sx={{
                    marginTop: '2px',
                    marginBottom: '0.5em',
                    minHeight: '2em',
                  }}
                />
              }
            />

            <SettingButton onClick={() => setIsTyping(false)}>
              이메일 재입력
            </SettingButton>
          </Box>
          <SaveButton>저장하기</SaveButton>
        </>
      )}
    </Box>
  )
}

export default ValidationCodeForm
