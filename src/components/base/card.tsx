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
}

const Card: React.FC<CardProps> = ({
  width = '512px',
  height = '594px',
  coverImageHeight = '320px',
  coverImage,
  profileImage,
  title,
  content,
  hashTags,
  isEditor = false,
  onClickHamburger,
  isOptionOpen = false,
  onClick,
}) => {
  return (
    <CardContainer width={width} height={height} onClick={onClick}>
      <CoverImage
        height={coverImageHeight}
        src={coverImage}
        alt="card-cover-image"
      />
      <CardInfo>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          style={{marginBottom: '8px', marginTop: '16px'}}
        >
          <Avatar size="40px" url={profileImage} />
          {isEditor && (
            <button>
              <CustomIcons.HamburgerIcon onClick={onClickHamburger} />
            </button>
          )}
          {isOptionOpen && <EditOptions />}
        </FlexBox>
        <CardTitle>{title}</CardTitle>
        <CardContent>{content}</CardContent>
        <HashTags>{'#' + hashTags.join(' #')}</HashTags>
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

const CoverImage = styled.img(({height}: {height: string}) => ({
  height,
  width: '100%',
  objectFit: 'cover',
  overflow: 'hidden',
  borderRadius: '16px 16px 0px 0px',
}))

const CardInfo = styled.div({
  width: '100%',
  padding: '0px 24px',
})

const CardTitle = styled(Typography)({
  fontSize: 20,
  color: '#131313',
  fontWeight: 500,
  marginBottom: '16px',
})

const CardContent = styled(Typography)({
  fontSize: 16,
  color: '#707070',
  marginBottom: '8px',
  lineHeight: '150%',
})

const HashTags = styled(Typography)({
  fontSize: 14,
  color: '#FE7156',
})

export default Card
