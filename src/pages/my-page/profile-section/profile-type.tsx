import {Box, Modal, Typography, styled} from '@mui/material'
import {IfUserType} from 'types/user.interface'
import TypeInfoCard from './type-info-card'
import TypeAddCard from './type-add-card'
import { useState } from 'react'
import TypeModal from './modal/type-modal'

interface proptype {
  data: IfUserType[]
  flag: boolean
}

const indexArr: number[] = [0, 1, 2]

const ProfileType = ({data,flag}: proptype) => {

  const [isOpen,setIsOpen] = useState<boolean>(false)

  return (
    <Box sx={{marginLeft: 'auto',}}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <TypeModal/>
      </Modal>
      <Title>MY TYPE</Title>
      <TypeContainer>
        {indexArr.map(i =>
          i < data.length ? <TypeInfoCard data={data[i]} key={data[i].id}/> : <TypeAddCard setIsOpen={setIsOpen} key={i} flag={flag}/>,
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
