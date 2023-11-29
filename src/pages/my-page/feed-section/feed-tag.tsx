import {Typography, styled} from '@mui/material'

interface proptype {
  tags: string[]
}

const FeedTag = ({tags}: proptype) => {
  return (
    <FeedTagContainer>
      {tags.map((e, i) => (
        <TagText key={i} variant='body3' color="primary">{'#' + e}</TagText>
      ))}
    </FeedTagContainer>
  )
}

export default FeedTag

const FeedTagContainer = styled('div')`
  margin: 16px 0 16px 0;
  display: flex;
  gap: 0.1em;
`

const TagText = styled(Typography)`
  font-family: Pretendard;
`
