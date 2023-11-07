import FlexBox from '@layouts/flex-box'
import CustomIcons from '@assets/icons/custom-Icons'
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
  ReviewProfile,
  ReviewText,
  SingleImageCover,
} from './review-card.styles'

const ReviewCard = () => {
  const images = ['1', '2']
  const hash = ['플로랄', '플로랄', '고급짐']

  return (
    <ReviewLayout>
      <FlexBox alignItems="center">
        <ReviewProfile />
        <ReviewerID>hwang_yo92</ReviewerID>
      </FlexBox>
      <ImageBox>
        {images.length == 1 ? (
          <SingleImageCover />
        ) : (
          <FlexBox style={{gap: 16, marginTop: 20}}>
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
