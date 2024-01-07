import {Box, Typography, styled} from '@mui/material'
import {IfUserType} from 'types/user.interface'

interface proptype {
  data: IfUserType
}

const TypeInfoCard = ({data}: proptype) => {
  return (
    <Container>
      <Thumbnail src={data.thumbnail} alt={data.name} loading='lazy'/>
      <TypeText>{data.name}</TypeText>
    </Container>
  )
}

export default TypeInfoCard

const Container = styled(Box)(() => ({
  width: '180px',
  height: '180px',
  borderRadius: '16px',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}))

const Thumbnail = styled('img')(() => ({
  position: 'absolute',
  left: 0,
  top: 0,
  width: '100%',
  height: '100%',
}))

const TypeText = styled(Typography)(() => ({
  fontSize: '32px',
  fontWeight: 600,
  color: '#fff',
  textAlign: 'center',
  fontFamily: 'AritaBuri',
  zIndex: 1,
}))
