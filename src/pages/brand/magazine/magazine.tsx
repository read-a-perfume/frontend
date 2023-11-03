import FlexBox from '@layouts/flex-box'
import {
  Card,
  CardImage,
  CardSpan,
  CardTitle,
  EditorProfile,
  HashTags,
  MagazineInfo,
} from '../brand.style'
import {useState} from 'react'
import CustomIcons from '@assets/icons/custom-Icons'
import EditOptions from '@layouts/edit-options'
import {Link} from 'react-router-dom'

const Magazine = ({
  enterprise,
  data,
}: {
  enterprise: boolean
  data: {
    id: number
    image: string
    title: string
    content: string
    hashtag: string[][]
  }
}) => {
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false)

  return (
    <Card width="512px" height="594px">
      <Link
        to={`/brand/:id/magazine/${data.id}`}
        style={{textDecoration: 'none'}}
      >
        <CardImage
          height="320px"
          src="/images/brand-magazine.png"
          alt="brand magazine"
        />
      </Link>
      <MagazineInfo>
        <FlexBox
          justifyContent="space-between"
          alignItems="center"
          style={{marginBottom: '8px', marginTop: '16px'}}
        >
          <EditorProfile
            src="/images/brand-magazine.png"
            alt="editor profile image"
          />
          {enterprise && (
            <CustomIcons.HamburgerIcon
              onClick={() => setOptionsOpen(!optionsOpen)}
              style={{cursor: 'pointer'}}
            />
          )}
          {optionsOpen && <EditOptions />}
        </FlexBox>
        <Link
          to={`/brand/:id/magazine/${data.id}`}
          style={{textDecoration: 'none'}}
        >
          <CardTitle>{data.title}</CardTitle>
          <CardSpan>{data.content}</CardSpan>
          <HashTags>{'#' + data.hashtag.join(' #')}</HashTags>
        </Link>
      </MagazineInfo>
    </Card>
  )
}

export default Magazine
