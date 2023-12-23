import FavoriteIcon from '@mui/icons-material/Favorite'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import {Box, Typography, styled} from '@mui/material'

interface IfLikeCounter {
  handleAcitve: () => void
  handleInAcitve: () => void
  isActive: boolean
  likeNumber: number
}

const LikeCounter = ({
  handleAcitve,
  handleInAcitve,
  isActive,
  likeNumber,
}: IfLikeCounter) => {
  return (
    <Wrapper>
      {!isActive ? (
        <FavoriteBorderIcon onClick={handleAcitve} sx={{color: '#bcbcbc'}} />
      ) : (
        <FavoriteIcon
          onClick={handleInAcitve}
          sx={{color: theme => theme.palette.primary.main}}
        />
      )}

      <Typography variant="body5" sx={{fontWeight: 500}}>
        좋아요 {likeNumber} 개
      </Typography>
    </Wrapper>
  )
}
export default LikeCounter

const Wrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  '& > .MuiSvgIcon-root': {
    width: '20px',
    height: '20px',
  },
})
