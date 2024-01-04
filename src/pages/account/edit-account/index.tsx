import {Box, styled} from '@mui/material'
import {PwFormDataType} from './type'
import {FormProvider, useForm} from 'react-hook-form'
import usePostPw from './hook/use-post-pw'
import EditPw from './edit-pw/edit-pw'
import EditEmail from './edit-email/edit-email'



const EditAccount = () => {
  const pwMethods = useForm<PwFormDataType>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const {onPwSubmit} = usePostPw(pwMethods.reset)

  return (
    <Container>
        <EditEmail/>
      <FormProvider {...pwMethods}>
        <form onSubmit={pwMethods.handleSubmit(onPwSubmit)}>
          <EditPw />
        </form>
      </FormProvider>
    </Container>
  )
}

export default EditAccount

const Container = styled(Box)(() => ({
  marginLeft: '63px',
  paddingTop: '170px',
  paddingBottom: '181px',
}))
