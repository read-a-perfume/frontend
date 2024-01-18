import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import {useContext} from 'react'
import {IfUserType} from 'types/user.interface'
import {TypeContext} from '.'

interface proptype {
  data: IfUserType
}

const TypeInfoCard = ({data}: proptype) => {
  const {setIsOpen, flag} = useContext(TypeContext)

  return (
    <Container
      onClick={
        flag
          ? () => setIsOpen(true)
          : () => {
              alert('자신의 타입만 변경 가능해요')
            }
      }
    >
      <Thumbnail src={data.thumbnail} alt={data.name} loading="lazy" />
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
  cursor: 'pointer',
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
  fontFamily: 'Arita buri',
  zIndex: 1,
}))
