import {Box, Divider, Typography, styled} from '@mui/material'

import FeedAuthor from './feed-author'
import FeedImg from './feed-img'
import FeedTag from './feed-tag'
import FeedFooterContent from './feed-footer-content'
import CustomIcons from '../../../../assets/icons/custom-Icons'
import {eachReviewType} from 'src/type/api-res-type'

interface proptype {
  data: eachReviewType
}

const FeedCard = ({data}: proptype) => {
  return (
    <FeedCardContainer>
      <FeedAuthor user={data.user} />
      <FeedImg />
      <FeedContent variant="body2">{data.shortReview}</FeedContent>
      <FeedTag tags={data.keywords} />
      <Divider />
      <FeedFooterContainer>
        <FeedFooterContent
          title="좋아요"
          value={data.likeCount}
          icon={<CustomIcons.HeartIcon />}
        />
        <FeedFooterContent
          title="댓글"
          value={data.commentCount}
          icon={<CustomIcons.CommentIcon2 />}
        />
      </FeedFooterContainer>
    </FeedCardContainer>
  )
}

export default FeedCard

const FeedCardContainer = styled(Box)(() => ({
  width: '512px',
  height: '420px',
  padding: '17px 24px 18px',
  borderRadius: '16px',
  border: 'solid 1px #ededed',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column',
}))

const FeedContent = styled(Typography)(({theme}) => ({
  fontSize:theme.typography.body2.fontSize,
  lineHeight: 1.5,
  textAlign: 'left',
  color: '#131313',
}))

const FeedFooterContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '24px',
  paddingTop: '20px',
}))
