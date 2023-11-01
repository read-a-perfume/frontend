import React from 'react'
import styled from '@emotion/styled'
import BoxLayout from './box-layout.js'
import BoxBottomButtton from './box-bottom-button.js'
import {Typography} from '@mui/material'
import FlexBox from '@layouts/flex-box.js'

const FavoriteBox = () => {
  return (
    <FavoriteBoxLayout>
      <TopBox>
        <TitleSection>
          <Title>즐겨찾기 한 제품</Title>
        </TitleSection>
        <FavoriteSection>
          {new Array(4).fill(0).map((_, idx) => (
            <FlexBox key={idx} gap="20px">
              <OuterCircle>
                <InnerCircle>
                  <img
                    src="/src/pages/my-page/images/perfume-test.png"
                    alt="perfume-product"
                    style={{marginLeft: 8}}
                  />
                </InnerCircle>
              </OuterCircle>
            </FlexBox>
          ))}
        </FavoriteSection>
      </TopBox>
      <BottomBox>
        <BoxBottomButtton
          noIcon
          text="더보기"
          onClick={() => console.log('see more')}
        />
      </BottomBox>
    </FavoriteBoxLayout>
  )
}

export default FavoriteBox

const FavoriteBoxLayout = styled(BoxLayout)({
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

const FavoriteSection = styled.div({
  height: '218px',
  display: 'flex',
  alignItems: 'center',
})

const OuterCircle = styled.div({
  width: 118,
  height: 118,
  borderRadius: 118,
  border: '1px solid #DBDBDB',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
})

const InnerCircle = styled.div({
  width: 107.5,
  height: 107.5,
  borderRadius: 107.5,
  background: 'linear-gradient(0deg, #fff, #D9D9D9);',
  position: 'absolute',
  zIndex: 1,
})

const BottomBox = styled.div({
  height: '84px',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  alingItems: 'center',
})
