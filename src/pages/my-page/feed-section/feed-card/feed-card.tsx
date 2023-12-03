import {Box, Divider, Typography, styled} from '@mui/material'
import {eachFeedType} from '../../data/each-feed-data'
import FeedAuthor from './feed-author'
import FeedImg from './feed-img'
import FeedTag from './feed-tag'
import FeedFooterContent from './feed-footer-content'
import CustomIcons from '../../../../assets/icons/custom-Icons'

interface proptype {
  data: eachFeedType
}

const FeedCard = ({data}: proptype) => {
  return (
    <FeedCardContainer>
      <FeedAuthor author={data.author} />
      <FeedImg />
      <FeedContent variant="body2">{data.content}</FeedContent>
      <FeedTag tags={data.tag} />
      <Divider />
      <FeedFooterContainer>
        <FeedFooterContent
          title="좋아요"
          value={data.like}
          icon={<CustomIcons.HeartIcon />}
        />
        <FeedFooterContent
          title="댓글"
          value={data.commentCnt}
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

const FeedContent = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
  fontWeight: 'normal',
  fontStretch: 'normal',
  fontStyle: 'normal',
  lineHeight: 1.5,
  letterSpacing: 'normal',
  textAlign: 'left',
  color: '#131313',
}))

const FeedFooterContainer = styled('div')(() => ({
  display: 'flex',
  gap: '24px',
  paddingTop: '20px',
}))
