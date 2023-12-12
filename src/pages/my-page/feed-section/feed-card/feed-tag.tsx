import {Box, Typography, styled} from '@mui/material'

interface proptype {
  tags: string[]
}

const FeedTag = ({tags}: proptype) => {
  return (
    <FeedTagContainer>
      <TagText color="primary">{'#' + tags.join(' #')}</TagText>
    </FeedTagContainer>
  )
}

export default FeedTag

const FeedTagContainer = styled(Box)(() => ({
  margin: '16px 0',
}))

const TagText = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.body3.fontSize,
}))
