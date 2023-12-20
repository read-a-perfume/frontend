import {Box, Modal, Typography, styled} from '@mui/material'
import {IfUserType} from 'types/user.interface'
import TypeInfoCard from './type-info-card'
import TypeAddCard from './type-add-card'
import { useState } from 'react'

interface proptype {
  data: IfUserType[]
}

const indexArr: number[] = [0, 1, 2]

const ProfileType = ({data}: proptype) => {

  const [isOpen,setIsOpen] = useState<boolean>(false)

  return (
    <Box sx={{marginLeft: 'auto',}}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <></>
      </Modal>
      <Title>MY TYPE</Title>
      <TypeContainer>
        {indexArr.map(i =>
          i < data.length ? <TypeInfoCard data={data[i]} /> : <TypeAddCard setIsOpen={setIsOpen}/>,
        )}
      </TypeContainer>
    </Box>
  )
}

export default ProfileType

const Title = styled(Typography)(() => ({
  fontSize: '20px',
  fontWeight: 600,
  color: '#000',
  marginBottom: '15px',
}))

const TypeContainer = styled(Box)(() => ({
  display: 'flex',
  gap: '27px',
}))
