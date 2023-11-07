import styled from '@emotion/styled'
import {Typography} from '@mui/material'
import {Link} from 'react-router-dom'

import FlexBox from '@layouts/flex-box'
import img1 from './images/Rectangle7217(5).png'

interface PerfumesItemProps {
  item: any
  hasNavigation?: boolean
}

// 타입 추후에 설정할 예정입니다.
const PerfumesItem = ({item, hasNavigation = true}: PerfumesItemProps) => {
  console.log('item:', item)

  return (
    <>
      {/*  Link는 임시 */}
      <Link to={`/perfume/:id`}>
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

          {hasNavigation ? (
            <Information>
              <InfoLeft>
                <FlexBox justifyContent="center" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.11 5.72L12.54 8.61C12.42 9.2 12.58 9.81 12.96 10.27C13.34 10.73 13.9 11 14.5 11H20V12.08L17.43 18H9.34C9.25062 17.9975 9.1656 17.9609 9.10237 17.8976C9.03915 17.8344 9.00252 17.7494 9 17.66V9.82L13.11 5.72ZM14 2L7.59 8.41C7.21 8.79 7 9.3 7 9.83V17.66C7 18.95 8.05 20 9.34 20H17.44C18.15 20 18.8 19.63 19.16 19.03L21.83 12.88C21.94 12.63 22 12.36 22 12.08V11C22 9.9 21.1 9 20 9H14.5L15.42 4.35C15.47 4.13 15.44 3.89 15.34 3.69C15.1126 3.23961 14.8156 2.82789 14.46 2.47L14 2ZM4 9H2V20H4C4.55 20 5 19.55 5 19V10C5 9.45 4.55 9 4 9Z"
                      fill="#707070"
                    />
                  </svg>
                  <Type hasNavigation={hasNavigation}>공감</Type>
                  <span className="like-count">126</span>
                </FlexBox>
              </InfoLeft>

              <div className="vertical-line" />
              <InfoRight>
                <FlexBox justifyContent="center" alignItems="center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M13.11 18.28L12.54 15.39C12.42 14.8 12.58 14.19 12.96 13.73C13.34 13.27 13.9 13 14.5 13H20V11.92L17.43 6H9.34C9.25062 6.00252 9.1656 6.03915 9.10237 6.10237C9.03915 6.1656 9.00252 6.25062 9 6.34V14.18L13.11 18.28ZM14 22L7.59 15.59C7.21 15.21 7 14.7 7 14.17V6.34C7 5.05 8.05 4 9.34 4H17.44C18.15 4 18.8 4.37 19.16 4.97L21.83 11.12C21.94 11.37 22 11.64 22 11.92V13C22 14.1 21.1 15 20 15H14.5L15.42 19.65C15.47 19.87 15.44 20.11 15.34 20.31C15.1126 20.7604 14.8156 21.1721 14.46 21.53L14 22ZM4 15H2V4H4C4.55 4 5 4.45 5 5V14C5 14.55 4.55 15 4 15Z"
                      fill="#707070"
                    />
                  </svg>
                  <Type hasNavigation={hasNavigation}>비공감</Type>
                  <span>34</span>
                </FlexBox>
              </InfoRight>
            </Information>
          ) : (
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
          )}
        </FlexBox>
      </Link>
    </>
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

const Type = styled.span<{hasNavigation?: boolean}>(({hasNavigation}) => ({
  marginLeft: hasNavigation ? '8px' : '0px',
  marginRight: '15px',
  color: '#949494',
}))

const InfoLeft = styled.div({
  padding: '0 15px',

  '& .like-count': {
    color: '#FE7156',
  },
})

const InfoRight = styled.div({})

export default PerfumesItem
