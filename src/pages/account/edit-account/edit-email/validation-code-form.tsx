import {Box} from '@mui/material'
import {Input} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditEmailForms from '../hook/use-edit-email-forms'
import TypingContext from '../util/typing-context'
import { useContext } from 'react'

const ValidationCodeForm = () => {
  const {validationCode} = useEditEmailForms()
  const {isTyping} = useContext(TypingContext)
  
  return (
    <Box sx={{height:'110px'}}>
      {isTyping && (
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Input placeholder="인증 번호 입력" {...validationCode.field} />
          <SaveButton>저장하기</SaveButton>
        </Box>
      )}
    </Box>
  )
}

export default ValidationCodeForm
