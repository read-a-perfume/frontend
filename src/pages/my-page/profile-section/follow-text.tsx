import {Typography, styled, Modal} from '@mui/material'
import FollowModal from './modal/follow-modal'
import {useState} from 'react'

interface proptype {
  title: string
  count: number
  label: 'following' | 'follower'
}

const FollowText = ({title, count, label}: proptype) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  console.log(isOpen)

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <FollowModal init={label} />
      </Modal>
      <Text onClick={() => setIsOpen(true)}>
        {`${title} `}
        <span style={{color: '#000'}}>{count}</span>
      </Text>
    </>
  )
}

export default FollowText

const Text = styled(Typography)(() => ({
  fontSize: '26.2px',
  color: '#a9a9a9',
  fontWeight: 500,
  width: '117px',
  cursor: 'pointer',
  '&:hover': {
    backgroundColor: '#f3f3f3',
  },
}))
