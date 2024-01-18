import Stack from "@mui/material/Stack";
import {PwInput} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditPwForms from '../hook/use-edit-pw-forms'
import ErrorMessage from '@components/base/error-message'
import EditTitle from '@pages/account/base/edit-title'
import FormLabel from '@pages/account/base/form-label'

const EditPw = () => {
  const {oldPassword, newPassword, confirmPassword} = useEditPwForms()

  const oldPwError = oldPassword.fieldState.error
  const newPwError = newPassword.fieldState.error
  const confirmPwError = confirmPassword.fieldState.error
  

  return (
    <>
      <EditTitle title="비밀번호 재설정"/>
        <FormLabel>비밀번호</FormLabel>
        <Stack sx={{gap:'40px'}}>
          <PwInput
            placeholder="현재 비밀번호"
            type="password"
            autoComplete="new-password"
            {...oldPassword.field}
            helperText={
              <ErrorMessage
                errorMessage={oldPwError?.message}
                sx={{marginTop: '2px', marginBottom: '0.5em', minHeight: '2em'}}
              />
            }
          />
          <PwInput
            placeholder="새 비밀번호"
            type="password"
            autoComplete="new-password"
            {...newPassword.field}
            helperText={
              <ErrorMessage
                errorMessage={newPwError?.message}
                sx={{marginTop: '2px', marginBottom: '0.5em', minHeight: '2em'}}
              />
            }
          />

          <PwInput
            placeholder="세 비밀번호 확인"
            type="password"
            autoComplete="new-password"
            {...confirmPassword.field}
            helperText={
              <ErrorMessage
                errorMessage={confirmPwError?.message}
                sx={{marginTop: '2px', marginBottom: '0.5em', minHeight: '2em'}}
              />
            }
          />
          <SaveButton>저장하기</SaveButton>
        </Stack>
  
      
    </>
  )
}

export default EditPw
