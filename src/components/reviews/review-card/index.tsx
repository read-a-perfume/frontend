import FlexBox from '@layouts/flex-box'
import Avatar from '@mui/material/Avatar'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import LikeCounter from '../like-counter'
import {useState} from 'react'
import CardThumbnailDefault from './card-thumbanail-default'
import CardThumbnailOne from './card-thumbanail-one'
import CardThumbnailTwo from './card-thumbanail-two'
import CardThumbnailThree from './card-thumbanail-three'
import CommnetCounter from '../commnet-counter'
import ReviewDetails from '../review-details'
import {IfReviewContent} from 'types/review.interface'

const ReviewCard = ({...rest}: IfReviewContent) => {
  const {
    id,
    author,
    likeCount,
    commentCount,
    shortReview,
    thumbnails,
    keywords,
  } = rest
  const [isLikeActive, setIsLikeActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const handleLikeActive = () => {
    setIsLikeActive(true)
  }

  const handleLikeInActive = () => {
    setIsLikeActive(false)
  }
  const handleOpen = () => {
    setIsOpen(true)
  }
  const handleClose = () => {
    setIsOpen(false)
  }

  return (
    <>
      <ReviewCardWrapper onClick={handleOpen}>
        <CardHeader
          sx={{
            paddingLeft: '0px',
            '& .MuiCardHeader-avatar': {marginRight: '12px'},
          }}
          avatar={<UserAvatar aria-label="유저이미지" />}
          // 유저 닉네임, 아이디
          title={
            <Typography variant="body4" sx={{fontWeight: '600', color: '#000'}}>
              {author?.username}
            </Typography>
          }
        />

        <>
          {thumbnails?.length === 0 && <CardThumbnailDefault />}
          {/* 제품 리뷰 이미지 하나일 때 */}
          {thumbnails && thumbnails.length === 1 && (
            <CardThumbnailOne thumbnails={thumbnails[0]} />
          )}
          {/* 제품 리뷰 이미지 두개일 때 */}
          {thumbnails && thumbnails.length === 2 && (
            <CardThumbnailTwo thumbnails={thumbnails} />
          )}

          {/* 제품 리뷰 이미지 세개 이상 일 때 */}
          {thumbnails && thumbnails.length >= 3 && (
            <CardThumbnailThree thumbnails={thumbnails} />
          )}
        </>

        <CardContent
          sx={{
            display: 'flex',
            flexDirection: 'column',
            padding: '16px 0px',
          }}
        >
          <>
            {/* 향수 설명 */}
            <Typography variant="body4" sx={{color: '#131313'}}>
              {shortReview}
            </Typography>

            {/* 향수 태그 */}

            <Typography
              variant="body5"
              sx={{
                color: theme => theme.palette.primary.main,
              }}
            >
              {keywords.length > 0 && <>{'#' + keywords.join(' #')}</>}
            </Typography>
          </>
        </CardContent>

        <CardActions
          disableSpacing
          sx={{
            borderTop: '1px solid #ededed',
            padding: keywords.length === 0 ? '20.5px 0px' : '13.5px 0px',
          }}
        >
          <FlexBox alignItems="center" style={{padding: '0px 4.5px'}}>
            <LikeCounter
              likeNumber={likeCount}
              isActive={isLikeActive}
              handleAcitve={handleLikeActive}
              handleInAcitve={handleLikeInActive}
            />
          </FlexBox>

          <FlexBox
            alignItems="center"
            style={{padding: '0px 4.5px', marginLeft: '16.7px'}}
          >
            <CommnetCounter commentCounter={commentCount} />
          </FlexBox>
        </CardActions>
      </ReviewCardWrapper>
      {isOpen && (
        <ReviewDetails id={id} handleClose={handleClose} open={isOpen} />
      )}
    </>
  )
}
export default ReviewCard

const ReviewCardWrapper = styled(Card)({
  width: '384px',
  height: '315px',
  padding: '0 18px',
  borderRadius: '12px',
  boxShadow: 'none',
  border: '0.7px solid #ededed',
  cursor: 'pointer',
})

const UserAvatar = styled(Avatar)({
  bgcolor: 'gray',
  width: '24px',
  height: '24px',
})
