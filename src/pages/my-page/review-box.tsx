import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'
import BoxBottomButtton from './box-bottom-button.js'
import BoxLayout from './box-layout.js'

const ReviewBox = () => {
  return (
    <ReviewBoxLayout>
      <TopBox>
        <TitleSection>
          <Title>내 리뷰</Title>
        </TitleSection>
        <ReviewSection>
          <FlexBox justifyContent="space-between">
            <Name>작성중인 후기</Name>
            <FlexBox alignItems="center" gap="2px">
              <ReviewNumber>5</ReviewNumber>
              <Suffix>건</Suffix>
            </FlexBox>
          </FlexBox>
          <FlexBox justifyContent="space-between">
            <Name>작성한 후기</Name>
            <FlexBox alignItems="center" gap="2px">
              <ReviewNumber>15</ReviewNumber>
              <Suffix>건</Suffix>
            </FlexBox>
          </FlexBox>
        </ReviewSection>
      </TopBox>
      <BottomBox>
        <BoxBottomButtton
          text="리뷰 작성하기"
          onClick={() => console.log('go to post review')}
        />
      </BottomBox>
    </ReviewBoxLayout>
  )
}

const ReviewBoxLayout = styled(BoxLayout)({
  height: '380px',
  padding: '0px 24px',
  paddingTop: 14,
})

const TopBox = styled.div({
  height: '296px',
  margin: '0px 24px',
  borderBottom: '1px solid #E7E7E7',
})

const TitleSection = styled.div({
  height: '77px',
  display: 'flex',
  alignItems: 'center',
  borderBottom: '1px solid #DBDBDB',
})

const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: '600',
  color: '#707070',
})

const ReviewSection = styled.div({
  height: '219px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: '0px 26px',
  gap: '47px',
})

const Name = styled(Typography)({
  fontSize: '22px',
  fontWeight: '500',
  color: '#707070',
})

const ReviewNumber = styled(Typography)({
  fontSize: '20px',
  fontWeight: '500',
})

const Suffix = styled(Typography)({
  fontSize: 16,
  fontWeight: '500',
  color: '#707070',
  marginBottom: -2,
})

const BottomBox = styled.div({
  height: '84px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
})

export default ReviewBox
