import {useRouter} from '@hooks/use-router'
import FlexBox from '@layouts/flex-box'
import {Box, Button, Typography, styled} from '@mui/material'

import {Link} from 'react-router-dom'

interface IfReviewListSelectProps {
  sectionTitle: string
  buttonText: string
  optionName: string[]
  handleChangeSort: any
  sort: any
}

const ReviewFilterTabs = ({
  sectionTitle,
  buttonText,
  optionName,
  handleChangeSort,
  sort,
}: IfReviewListSelectProps) => {
  const {routeTo} = useRouter()

  return (
    <>
      <SectionTitle fontWeight={600}>{sectionTitle}</SectionTitle>
      <Typography variant="body5" color="#a9a9a9">
        다양한 향수 리뷰를 피드에서 살펴보세요
      </Typography>
      <FlexBox justifyContent="space-between" style={{marginTop: '21.5px'}}>
        <FlexBox gap="12px">
          <Chip
            isClicked={sort === 'RECENT'}
            onClick={() => handleChangeSort('RECENT')}
          >
            {optionName[0]}
          </Chip>
          <Chip
            isClicked={sort === 'LIKE'}
            onClick={() => handleChangeSort('LIKE')}
          >
            {optionName[1]}
          </Chip>
        </FlexBox>
        <FlexBox gap="9px">
          {buttonText === '리뷰 작성하기' && (
            <WriteReviewButton onClick={() => routeTo('/reviews/writer')}>
              {buttonText}
            </WriteReviewButton>
          )}
          {buttonText === '전체 보기' && (
            <CustomLink to="/reviews">
              <Typography variant="body4" color="#a9a9a9">
                전체 보기
              </Typography>
            </CustomLink>
          )}
        </FlexBox>
      </FlexBox>
    </>
  )
}
export default ReviewFilterTabs

const Chip = styled(Box)(({isClicked}: {isClicked: boolean}) => ({
  border: 'none',
  fontSize: 16,
  fontWeight: '600',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: 21,
  height: 31,
  padding: '20px 15px',
  fontFamily: 'Pretendard',
  cursor: 'pointer',
  backgroundColor: isClicked ? '#FE7156' : '#F1F1F5',
  color: isClicked ? 'white' : '#A9A9A9',
}))

const SectionTitle = styled(Typography)({
  fontFamily: 'Arita buri, sans-serif, Arial !important',
  fontSize: 19.5,
  color: '#191919',
  marginRight: 'auto',
})

const WriteReviewButton = styled(Button)({
  color: '#FFF',
  fontSize: 12,
  padding: '9px 41.3px 8.5px 42px',
  borderRadius: 10,
  backgroundColor: '#FE7156',

  '&:hover': {
    background: '#fe7256d6 ',
  },
})

const CustomLink = styled(Link)({
  display: 'flex',
  alignItems: 'center',
})
