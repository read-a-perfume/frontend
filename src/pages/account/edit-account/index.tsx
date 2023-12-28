import {Box, styled} from '@mui/material'
import {FormDataType} from './type'
import {FormProvider, useForm} from 'react-hook-form'
import usePostPw from './hook/use-post-pw'
import EditPw from './edit-pw/edit-pw'

const EditAccount = () => {
  const methods = useForm<FormDataType>({
    defaultValues: {
      oldPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  })

  const {onSubmit} = usePostPw(methods.reset)

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
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
