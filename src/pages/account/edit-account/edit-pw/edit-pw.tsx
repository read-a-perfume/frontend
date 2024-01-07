import {Stack} from '@mui/material'
import {PwInput} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditPwForms from '../hook/use-edit-pw-forms'
import ErrorMessage from '@components/base/error-message'
import EditTitle from '@pages/account/base/edit-title'
import FormLabel from '@pages/account/base/form-label'

const EditPw = () => {
  const {oldPassword, newPassword, confirmPassword} = useEditPwForms()

  const {errors: oldPwErrors} = oldPassword.formState
  const {errors: newPwErrors} = newPassword.formState
  const {errors: confirmPwErrors} = confirmPassword.formState
  

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
                errorMessage={oldPwErrors.oldPassword?.message}
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
                errorMessage={newPwErrors.newPassword?.message}
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
                errorMessage={confirmPwErrors.confirmPassword?.message}
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
