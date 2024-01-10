import {Box, Stack, styled} from '@mui/material'
import ModalContainer from '../modal-container'
import {useState} from 'react'

type FollowMarkType = 'following' | 'follower'

interface proptype {
  init: FollowMarkType
}

const FollowModal = ({init}: proptype) => {
  const [currentMark, setCurrentMark] = useState<FollowMarkType>(init)

  return (
    <ModalContainer>
      <Stack direction="row">
        <EachBar
          flag={currentMark === 'follower'}
          onClick={() => {
            setCurrentMark('follower')
          }}
        >
          팔로워
        </EachBar>
        <EachBar
          flag={currentMark === 'following'}
          onClick={() => {
            setCurrentMark('following')
          }}
        >
          팔로우
        </EachBar>
      </Stack>
    </ModalContainer>
  )
}

export default FollowModal

const EachBar = styled(Box)<{flag: boolean}>(({theme, flag}) => ({
  width: '50%',
  height: '67.4px',
  borderBottomColor: `${flag ? '#101010' : theme.palette.grey[300]}`,
  borderBottom: `solid 1px`,
  color: `${flag ? '#000' : theme.palette.grey[500]}`,
  transition: 'color 0.7s ease, border-bottom-color 0.7s ease',
  fontSize: '20px',
  fontWeight: 'bold',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))
