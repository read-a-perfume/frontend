import FlexBox from '@layouts/flex-box.js'
import CustomIcons from '@assets/icons/custom-Icons.js'
import {
  HashTags,
  ImageBox,
  MainImageCover,
  Options,
  OptionsText,
  OtherImages,
  OtherImagesTypo,
  ReviewerID,
  ReviewLayout,
  ReviewText,
  SingleImageCover,
} from './review-card.styles.js'
import Avatar from '@components/base/avatar.js'

const ReviewCard = () => {
  const images = ['1', '2']
  const hash = ['플로랄', '플로랄', '고급짐']

  return (
    <ReviewLayout>
      <FlexBox alignItems="center">
        <Avatar size="32px" url={undefined} />
        <ReviewerID>hwang_yo92</ReviewerID>
      </FlexBox>
      <ImageBox>
        {images.length == 1 ? (
          <SingleImageCover />
        ) : (
          <FlexBox gap="16px">
            <MainImageCover />
            <OtherImages>
              <OtherImagesTypo>+ {images.length - 1}</OtherImagesTypo>
            </OtherImages>
          </FlexBox>
        )}
      </ImageBox>
      <ReviewText>
        이 향수는 우아하고 로맨틱한 플로랄 향으로, 꽃 향기의 매력과 여성스러움을
        감추고 있습니다.
      </ReviewText>
      <HashTags>{'#' + hash.join(' #')}</HashTags>
      <Options>
        <FlexBox>
          <CustomIcons.HeartIcon />
          <OptionsText>좋아요 172개</OptionsText>
        </FlexBox>
        <FlexBox>
          <CustomIcons.CommentIcon2 />
          <OptionsText>댓글 40개</OptionsText>
        </FlexBox>
      </Options>
    </ReviewLayout>
  )
}

export default ReviewCard
