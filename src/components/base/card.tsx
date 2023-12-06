import CustomIcons from '@assets/icons/custom-Icons.js'
import styled from '@emotion/styled'
import EditOptions from '@layouts/edit-options.js'
import FlexBox from '@layouts/flex-box.js'
import {Typography} from '@mui/material'
import Avatar from './avatar.js'

interface CardProps {
  width?: string
  height?: string
  coverImageHeight?: string
  coverImage: string
  profileImage: string
  title: string
  content: string
  hashTags: string[]
  isEditor?: boolean
  isOptionOpen?: boolean
  onClickHamburger?: () => void
  onClick: () => void
  style?: any
}

const Card: React.FC<CardProps> = ({
  width = '464px',
  height = '442px',
  coverImageHeight = '320px',
  coverImage,
  profileImage,
  title,
  content,
  hashTags,
  isEditor = false,
  isOptionOpen = false,
  onClick,
  style,
}) => {
  return (
    <CardContainer width={width} height={height} style={style}>
      <CoverImage
        width={width}
        height={coverImageHeight}
        src={coverImage}
        alt="card-cover-image"
        onClick={onClick}
      />
      <CardInfo width={width}>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          style={{marginBottom: '8px', marginTop: '16px'}}
        >
          <Avatar size="30px" url={profileImage} />
          {isEditor && (
            <button>
              <CustomIcons.HamburgerIcon />
            </button>
          )}
          {isOptionOpen && <EditOptions />}
        </FlexBox>
        <ContentContainer onClick={onClick}>
          <CardTitle>{title}</CardTitle>
          <CardContent>{content}</CardContent>
          <HashTags>{'#' + hashTags.join(' #')}</HashTags>
        </ContentContainer>
      </CardInfo>
    </CardContainer>
  )
}

const CardContainer = styled.div(
  ({width, height}: {width: string; height: string}) => ({
    height,
    width,
    borderRadius: '16px',
    border: '1px solid #EDEDED',
  }),
)

const CoverImage = styled.img(
  ({height, width}: {height: string; width: string}) => ({
    width,
    height,
    objectFit: 'cover',
    overflow: 'hidden',
    borderRadius: '16px 16px 0px 0px',
    cursor: 'pointer',
  }),
)

const CardInfo = styled.div(({width}: {width: string}) => ({
  width: Number(width.slice(0, width.length - 2)) - 50,
  padding: '0px 24px',
}))

const ContentContainer = styled.div({
  cursor: 'pointer',
})

const CardTitle = styled(Typography)({
  fontSize: 15,
  color: '#131313',
  fontWeight: 500,
  marginBottom: '16px',
})

const CardContent = styled(Typography)({
  fontSize: 12,
  color: '#707070',
  marginBottom: '8px',
  lineHeight: '150%',
})

const HashTags = styled(Typography)({
  fontSize: 10.5,
  color: '#FE7156',
})

export default Card
