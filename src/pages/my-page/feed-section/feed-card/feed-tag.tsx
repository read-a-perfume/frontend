import {Box, Typography, styled} from '@mui/material'

interface proptype {
  tags: string[]
}

const FeedTag = ({tags}: proptype) => {
  return (
    <FeedTagContainer>
      <TagText variant="body3" color="primary">
        {'#' + tags.join(' #')}
      </TagText>
    </FeedTagContainer>
  )
}

export default FeedTag

const FeedTagContainer = styled(Box)(() => ({
  margin: '16px 0',
}))

const TagText = styled(Typography)(() => ({
  fontFamily: 'Pretendard',
}))
