import CustomIcons from '@assets/icons/custom-Icons.js'
import {Box, styled} from '@mui/material'
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
        </FlexBox>
        <ContentContainer onClick={onClick}>
          <CardTitle variant="h4">{title}</CardTitle>
          <CardContent variant="body2">{content}</CardContent>
          <HashTags variant="body3">{'#' + hashTags.join(' #')}</HashTags>
        </ContentContainer>
      </CardInfo>
    </CardContainer>
  )
}

const CardContainer = styled(Box)<{width: string; height: string}>(
  ({width, height, theme}) => ({
    height: height,
    width: width,
    borderRadius: '16px',
    border: `1px solid ${theme.palette.grey[300]}`,
  }),
)

const CoverImage = styled('img')<{height: string}>(({height}) => ({
  height: height,
  width: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  borderRadius: '16px 16px 0px 0px',
  cursor: 'pointer',
}))

const CardInfo = styled(Box)(() => ({
  width: '90%',
  padding: '0px 24px',
}))

const ContentContainer = styled(Box)(() => ({
  cursor: 'pointer',
}))

const CardTitle = styled(Typography)(() => ({
  color: '#131313',
  fontWeight: 500,
  marginBottom: '16px',
  width: '100%',
}))

const CardContent = styled(Typography)(() => ({
  color: '#707070',
  marginBottom: '8px',
  lineHeight: '150%',
  maxHeight: '96px',
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  WebkitLineClamp: 4,
  textOverflow: 'ellipsis',
  width: '90%',
}))

const HashTags = styled(Typography)(({theme}) => ({
  color: theme.palette.primary.main,
}))

export default Card
