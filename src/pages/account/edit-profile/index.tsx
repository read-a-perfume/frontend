import {Box, styled} from '@mui/material'
import EditInfo from './edit-info/edit-info'
import {FormProvider, useForm} from 'react-hook-form'
import usePostProfile from './hook/use-post-profile'
import {FormInfoDataType, FormThumbnailDataType} from './type'
import EditThumbnail from './edit-info/edit-thumbnail'
import LoadingOverlay from '@components/base/loading-overlay'

interface proptype {
  data: FormInfoDataType & FormThumbnailDataType
}

const EditProfile = ({data}: proptype) => {
  const methods = useForm<FormInfoDataType>({
    defaultValues: {
      username: data.username,
      bio: data.bio,
      sex: data.sex,
    },
  })

  const thumbnailMethods = useForm<FormThumbnailDataType>({
    defaultValues: {
      thumbnail: data.thumbnail,
    },
  })

  const {onSubmit, onSubmitThumbnail,profileImageLoading,profileLoading} = usePostProfile()

  return (
    <Container>
      {(profileLoading || profileImageLoading) && <LoadingOverlay/>}
      <FormProvider {...thumbnailMethods}>
        <form onSubmit={thumbnailMethods.handleSubmit(onSubmitThumbnail)}>
          <EditThumbnail />
        </form>
      </FormProvider>
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
