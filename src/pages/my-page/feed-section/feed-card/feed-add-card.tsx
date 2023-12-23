import FeedCardContainer from './feed-card-container'
import WriteButton from '../write-button'

const FeedAddCard = () => {
  return (
    <FeedCardContainer
      sx={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}
    >
      <WriteButton />
    </FeedCardContainer>
  )
}

export default FeedAddCard
