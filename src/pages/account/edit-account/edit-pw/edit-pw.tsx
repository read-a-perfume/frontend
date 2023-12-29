import {Stack} from '@mui/material'
import EditTitle from '@pages/account/base/edit-title'
import FormLabel from '@pages/account/base/form-label'
import {PwInput} from '@pages/account/base/input'
import SaveButton from '@pages/account/base/save-button'
import useEditPwForms from '../hook/use-edit-pw-forms'
import ErrorMessage from '@components/base/error-message'

const EditPw = () => {
  const {oldPassword, newPassword, confirmPassword} = useEditPwForms()

  const {errors: oldPwErrors} = oldPassword.formState
  const {errors: newPwErrors} = newPassword.formState
  const {errors: confirmPwErrors} = confirmPassword.formState

  return (
    <>
      <EditTitle title="아이디 관리">
        <FormLabel>아이디</FormLabel>
        {/*<Input placeholder="아이디" autoComplete="off" />*/}
        <p>아이디는 못바꾸게 그냥 텍스트로만 표시하는게 좋을 것 같아요</p>
        <FormLabel>비밀번호</FormLabel>
        <Stack>
          <PwInput
            placeholder="현재 비밀번호"
            type="password"
            autoComplete="new-password"
            {...oldPassword.field}
            helperText={
              <ErrorMessage
                errorMessage={oldPwErrors.oldPassword?.message}
                sx={{marginTop: '2px', marginBottom: '0.5em', minHeight:'2em'}}
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
                sx={{marginTop: '2px', marginBottom: '0.5em', minHeight:'2em'}}
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
                sx={{marginTop: '2px', marginBottom: '0.5em',  minHeight:'2em'}}
              />
            }
          />
        </Stack>
      </EditTitle>
      <SaveButton>저장하기</SaveButton>
    </>
  )
}

export default EditPw
