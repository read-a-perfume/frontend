import {Box, styled} from '@mui/material'
import EditInfo from './edit-info/edit-info'
import {FormProvider, useForm} from 'react-hook-form'
import usePostProfile from '../hook/use-post-profile'
import {FormDataType} from './type'
import {IfMe} from 'types/user.interface'

interface proptype {
  data: IfMe
}

const EditProfile = ({data}: proptype) => {
  const methods = useForm<FormDataType>({
    defaultValues: {
      thumbnail: data.thumbnail,
      username: data.username,
      bio: data.bio,
      sex: data.sex,
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
