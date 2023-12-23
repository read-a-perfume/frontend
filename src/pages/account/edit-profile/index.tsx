import {Box, styled} from '@mui/material'
import EditInfo from './edit-info/edit-info'
import {FormProvider, useForm} from 'react-hook-form'
import usePostProfile from '../hook/use-post-profile'
import { FormDataType } from './type'

const EditProfile = () => {
  const methods = useForm<FormDataType>({
    defaultValues: {
      thumbnail: null,
      username: '',
      bio: '',
      sex: 'male',
    },
  })

  const {onSubmit} = usePostProfile()

  return (
    <Container>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <EditInfo />
        </form>
      </FormProvider>
    </Container>
  )
}

export default EditProfile

const Container = styled(Box)(() => ({
  marginLeft: '63px',
  paddingTop: '170px',
  paddingBottom: '181px',
}))
