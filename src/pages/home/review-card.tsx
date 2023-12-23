import FlexBox from '@layouts/flex-box.js'
import CustomIcons from '@assets/icons/custom-Icons.js'
import {
  ContentsBox,
  HashTags,
  ImageBox,
  MainImageCover,
  Options,
  OptionsText,
  OtherImages,
  OtherImagesTypo,
  ReviewerID,
  ReviewImage,
  ReviewLayout,
  ReviewMainImage,
  ReviewSingleImage,
  ReviewText,
  SingleImageCover,
} from './review-card.styles.js'
import Avatar from '@components/base/avatar.js'
import {Reviews} from './review.js'
import {NoAvatar} from '@components/header/logged-in-header.js'

interface ReviewCardProps {
  width: string
  item: Reviews
}

const ReviewCard = ({width, item}: ReviewCardProps) => {
  return (
    <ReviewLayout
      width={width}
      height={item.shortReview.length <= 30 ? '408px' : '428px'}
    >
      <FlexBox alignItems="center">
        {item.user.thumbnail ? (
          <Avatar size="32px" url={item.user.thumbnail} />
        ) : (
          <NoAvatar />
        )}
        <ReviewerID>{item.user.username}</ReviewerID>
      </FlexBox>
      <ImageBox>
        {!item.thumbnails.length && (
          <SingleImageCover>
            <ReviewSingleImage src="images/perfume-detail/review-preview02.jpg" />
          </SingleImageCover>
        )}
        {item.thumbnails.length == 1 && (
          <SingleImageCover>
            <ReviewSingleImage src={item.thumbnails[0]} />
          </SingleImageCover>
        )}
        {item.thumbnails.length > 0 && (
          <FlexBox justifyContent="space-between" gap="12px">
            <MainImageCover>
              <ReviewMainImage src={item.thumbnails[0]} />
            </MainImageCover>
            <OtherImages>
              <OtherImagesTypo>+ {item.thumbnails.length - 1}</OtherImagesTypo>
              <ReviewImage src={item.thumbnails[1]} />
            </OtherImages>
          </FlexBox>
        )}
      </ImageBox>
      <ContentsBox>
        <ReviewText>{item.shortReview}</ReviewText>
        <HashTags>{'#' + item.keywords.join(' #')}</HashTags>
      </ContentsBox>
      <Options>
        <FlexBox alignItems="center">
          <CustomIcons.HeartIcon />
          <OptionsText>좋아요 {item.likeCount}개</OptionsText>
        </FlexBox>
        <FlexBox alignItems="center">
          <CustomIcons.CommentIcon2 />
          <OptionsText>댓글 {item.commentCount}개</OptionsText>
        </FlexBox>
      </Options>
    </ReviewLayout>
  )
}

export default ReviewCard
