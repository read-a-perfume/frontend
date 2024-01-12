import {Box, Typography, styled} from '@mui/material'
import {IfCategory} from 'types/perfume.interface'
import {changeTypeWithId, getTypeWithId} from './util/util'
import CustomCheck from './custom-check'

interface proptype {
  id: number
  allType: (IfCategory & {
    select: boolean
  })[]
  setAllType: React.Dispatch<
    React.SetStateAction<
      | (IfCategory & {
          select: boolean
        })[]
      | undefined
    >
  >
}

const TypeCard = ({id, allType, setAllType}: proptype) => {
  const data = getTypeWithId(id, allType)

  return (
    <Container onClick={() => changeTypeWithId(id, allType, setAllType)}>
      <TypeImage src={data?.thumbnail} alt={data?.name} />
      <CustomCheck flag={data !== undefined && data.select} />
      <Title>{data?.name}</Title>
    </Container>
  )
}

export default TypeCard

const Container = styled(Box)(() => ({
  width: '128.1px',
  height: '153.7px',
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '10px',
  position: 'relative',
  backgroundColor: '#bbb',
  zIndex: 0,
  cursor: 'pointer',
}))

const TypeImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  zIndex: 0,
  filter: 'brightness(0.5)',
}))

const Title = styled(Typography)(({theme}) => ({
  fontSize: theme.typography.h4.fontSize,
  fontFamily: 'Buri',
  color: '#fff',
  zIndex: 1,
}))
