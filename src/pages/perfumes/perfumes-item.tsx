import {Typography, styled} from '@mui/material'
import {Link} from 'react-router-dom'
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined'
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined'

interface IfPerfumesItemProps {
  item: IfItemType
}

export interface IfItemType {
  brandName: string
  duration: string
  id: number
  name: string
  strength: string
  thumbnailUrl?: string
}

const PerfumesItem = ({item}: IfPerfumesItemProps) => {
  const {id, brandName, duration, name, strength, thumbnailUrl} = item

  return (
    <Wrapper>
      <Link to={`/perfume/${id}`}>
        <ProductWrapper>
          {thumbnailUrl ? (
            <img src={thumbnailUrl} alt="img" />
          ) : (
            <img src="/images/Rectangle7217(5).png" alt="img" />
          )}

          <BrandTitle>{brandName}</BrandTitle>
          <BrandSubTitle>{name}</BrandSubTitle>
        </ProductWrapper>
      </Link>

      <Information>
        {location.pathname.startsWith('/perfume/') ? (
          // 제품 상세 페이지
          <>
            <ThumbUpOutlinedIcon sx={{fontSize: '18px', cursor: 'pointer'}} />
            <TextWrap sx={{marginLeft: '6px', cursor: 'pointer'}}>
              <Type isLocation={location.pathname.startsWith('/perfume/')}>
                공감
              </Type>
              <Text color="#FE7156">126</Text>
            </TextWrap>

            <div className="vertical-line" />

            <ThumbDownOutlinedIcon sx={{fontSize: '18px', cursor: 'pointer'}} />
            <TextWrap sx={{marginLeft: '6px', cursor: 'pointer'}}>
              <Type isLocation={location.pathname.startsWith('/perfume/')}>
                비공감
              </Type>
              <Text color="#A9A9A9">126</Text>
            </TextWrap>
          </>
        ) : (
          // 제품 페이지 리스트
          <>
            <TextWrap>
              <Type isLocation={location.pathname.startsWith('/perfume/')}>
                강도
              </Type>
              {strength}
            </TextWrap>

            <div className="vertical-line" />

            <TextWrap>
              <Type isLocation={location.pathname.startsWith('/perfume/')}>
                지속력
              </Type>
              {duration}
            </TextWrap>
          </>
        )}
      </Information>
    </Wrapper>
  )
}

const Wrapper = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '282px',
})

const ProductWrapper = styled('div')({
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
  fontSize: '12px',
  fontWeight: '400',
  lineHeight: 'normal',
  marginBottom: '5px',
  color: '#131313',
})

const BrandSubTitle = styled(Typography)({
  fontSize: '16px',
  fontWeight: '600',
  lineHeight: '15px',
  marginBottom: '24px',
  color: '#131313',
})

const Information = styled('div')({
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '7.5px',
  backgroundColor: '#F1F1F1',
  fontWeight: '500',
  color: '#333333',
  marginTop: '24px',
  padding: '0 32px',

  '& .vertical-line': {
    borderLeft: '1px solid #BDBDBD',
    margin: '6px 21px 6px 16.25px',
    width: '0.75px',
    height: '22.5px',
  },
})

const TextWrap = styled('p')({
  width: '100%',
  color: '#333',
  fontFamily: 'Pretendard',
  fontSize: '10.5px',
  letterSpacing: '0.21px',
  whiteSpace: 'nowrap',
})

const Type = styled('span')<{isLocation: boolean}>(({isLocation}) => ({
  color: '#949494',
  marginRight: isLocation ? '2.75px' : '11.75px',
}))

const Text = styled('span')(({color}) => ({
  color: color,
}))

export default PerfumesItem
