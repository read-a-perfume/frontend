import {Box} from '@mui/material'
import MainThumbnailPhoto from './main-thumbnail-photo'
import SubThumbnailPhotos from './sub-thumbnail-photos'
import {IfReviewDetailResponse} from 'types/review.interface'

const PhotoSection = ({
  thumbnails,
}: Pick<IfReviewDetailResponse, 'thumbnails'>) => {
  return (
    <Box sx={{width: '415px'}}>
      <MainThumbnailPhoto thumbnail={thumbnails} />
      <SubThumbnailPhotos thumbnail={thumbnails} />
    </Box>
  )
}
export default PhotoSection
