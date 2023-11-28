import {Typography, styled} from '@mui/material'

interface proptype {
  tags: string[]
}

const FeedTag = ({tags}: proptype) => {
  return (
    <FeedTagContainer>
      {tags.map((e, i) => (
        <TagText key={i}>{'#' + e}</TagText>
      ))}
    </FeedTagContainer>
  )
}

export default FeedTag

const FeedTagContainer = styled('div')`
  margin: 16px 0 16px 0;
  display: flex;
  gap: 1em;
`

const TagText = styled(Typography)`
  font-family: Pretendard;
  font-size: 14px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #fe7156;
`
