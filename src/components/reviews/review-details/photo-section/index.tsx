import {Box} from '@mui/material'
import MainThumbnailPhoto from './main-thumbnail-photo'
import SubThumbnailPhotos from './sub-thumbnail-photos'

const PhotoSection = ({thumbnail}: any) => {
  return (
    <Box sx={{width: '486px'}}>
      <MainThumbnailPhoto thumbnail={thumbnail} />
      <SubThumbnailPhotos thumbnail={thumbnail} />
    </Box>
  )
}
export default PhotoSection
