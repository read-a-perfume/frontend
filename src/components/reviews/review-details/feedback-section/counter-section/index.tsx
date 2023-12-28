import CommnetCounter from '@components/reviews/commnet-counter'
import LikeCounter from '@components/reviews/like-counter'
import {Box} from '@mui/material'
import {useState} from 'react'

const CounterSection = ({setIsOpen}: any) => {
  const [isLikeAcitve, setIsLikeActive] = useState(false)

  const handleLikeActvie = () => {
    setIsLikeActive(true)
  }
  const handleLikeInActvie = () => {
    setIsLikeActive(false)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        marginBottom: '24px',
        background: '#Fff',
      }}
    >
      <Box sx={{display: 'flex', gap: '25px'}}>
        <LikeCounter
          isActive={isLikeAcitve}
          handleAcitve={handleLikeActvie}
          handleInAcitve={handleLikeInActvie}
          likeNumber={154}
        />
        <CommnetCounter commentCounter={154} />
      </Box>
      <button onClick={() => setIsOpen(open => !open)}>버튼</button>
    </Box>
  )
}

export default CounterSection
