import {Box, Typography, styled} from '@mui/material'
import {IfUserType} from 'types/user.interface'
import TypeInfoCard from './type-info-card'
import TypeAddCard from './type-add-card'

interface proptype {
  data: IfUserType[]
}

const indexArr: number[] = [0, 1, 2]

const ProfileType = ({data}: proptype) => {
  return (
    <Box sx={{marginLeft: 'auto',}}>
      <Title>MY TYPE</Title>
      <TypeContainer>
        {indexArr.map(i =>
          i < data.length ? <TypeInfoCard data={data[i]} /> : <TypeAddCard />,
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
