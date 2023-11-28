import {Divider, Typography, styled} from '@mui/material'
import {eachFeedType} from '../data/each-feed-data'
import FeedAuthor from './feed-author'
import FeedImg from './feed-img'
import FeedTag from './feed-tag'
import FeedFooterContent from './feed-footer-content'
import CustomIcons from '../../../assets/icons/custom-Icons'

interface proptype {
  data: eachFeedType
}

const FeedCard = ({data}: proptype) => {
  return (
    <FeedCardContainer>
      <FeedAuthor author={data.author} />
      <FeedImg />
      <FeedContent>{data.content}</FeedContent>
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

const FeedCardContainer = styled('div')`
  width: 512px;
  height: 420px;
  padding: 17px 24px 18px;
  border-radius: 16px;
  border: solid 1px #ededed;
  background-color: #fff;
  display:flex;
  flex-direction:column;
`

const FeedContent = styled(Typography)`
  font-family: Pretendard;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: normal;
  text-align: left;
  color: #131313;
  
`
const FeedFooterContainer = styled('div')`
  display: flex;
  gap: 24px;
  padding-top: 20px;
`
