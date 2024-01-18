import CommnetCounter from '@components/reviews/commnet-counter'
import LikeCounter from '@components/reviews/like-counter'
import Box from '@mui/material/Box'
import {createSvgIcon} from '@mui/material'
import {useState} from 'react'

const CounterSection = ({setIsOpen, open}: any) => {
  const [isLikeAcitve, setIsLikeActive] = useState(false)

  const handleLikeActvie = () => {
    setIsLikeActive(true)
  }
  const handleLikeInActvie = () => {
    setIsLikeActive(false)
  }
  console.log(open, 'open')
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
      <CommentButtonIcon
        onClick={() => setIsOpen((open: boolean) => !open)}
        sx={{
          transform: `${open ? 'rotate(180deg)' : 'rotate(0deg)'}`,
        }}
      />
    </Box>
  )
}

export default CounterSection

const CommentButtonIcon = createSvgIcon(
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
  >
    <path
      d="M16.59 8.59L12 13.17L7.41 8.59L6 10L12 16L18 10L16.59 8.59Z"
      fill="#505050"
    />
  </svg>,
  'arrow',
)
