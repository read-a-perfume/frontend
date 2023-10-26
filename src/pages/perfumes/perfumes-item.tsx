import styled from '@emotion/styled'
import {Typography} from '@mui/material'

import FlexBox from '@layouts/flex-box'

import img1 from './images/Rectangle7217(5).png'

const PerfumesItem = ({item}: any) => {
  console.log(item)

  return (
    <FlexBox
      direction="column"
      justifyContent=""
      alignItems="ceter"
      gap=""
      style={{
        width: '376px',
      }}
    >
      <ProductWrapper>
        <img src={img1} alt="img" />
        <BrandTitle>구딸파리</BrandTitle>
        <BrandSubTitle>로즈폼퐁 오 드 퍼퓸</BrandSubTitle>
      </ProductWrapper>

      <Information>
        <InfoLeft>
          <Type>강도</Type>
          적당한 향
        </InfoLeft>

        <div className="vertical-line" />
        <InfoRight>
          <Type>지속력</Type> 3시간~6시간
        </InfoRight>
      </Information>
    </FlexBox>
  )
}

const ProductWrapper = styled.div({
  border: '1px solid #EDEDED',
  borderRadius: '16px',
  textAlign: 'center',
  cursor: 'pointer',
  overflow: 'hidden',

  '& img': {
    transition: 'transform .3s ease-in-out',
  },
  '&:hover img': {
    transform: 'scale(1.1)',
  },
})

const BrandTitle = styled(Typography)({
  fontSize: '14px',
  fontWeight: '400',
  lineHeight: '16.71px',
  marginBottom: '5px',
  color: '#131313',
})

const BrandSubTitle = styled(Typography)({
  fontSize: '18px',
  fontWeight: '600',
  lineHeight: '20px',
  marginBottom: '32px',
  color: '#131313',
})

const Information = styled.div({
  width: '100%',
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  borderRadius: '12px',
  backgroundColor: '#F1F1F1',
  fontWeight: '500',
  color: '#333333',
  marginTop: '32px',
  padding: '0 32px',

  '& .vertical-line': {
    borderLeft: '1px solid #BDBDBD',
    margin: '8px 16px',
    height: '30px',
  },
})

const Type = styled.span({
  marginRight: '15px',
  color: '#949494',
})

const InfoLeft = styled.div({
  padding: '0 15px',
})

const InfoRight = styled.div({})

export default PerfumesItem
