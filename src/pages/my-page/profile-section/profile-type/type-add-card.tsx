import {Button, styled} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { useContext } from 'react'
import { TypeContext } from '.'

const TypeAddCard = () => {

  const {flag,setIsOpen} = useContext(TypeContext)

  if (!flag) {
    return <Container />
  }

  return (
    <Container onClick={() => setIsOpen(true)}>
      <Add />
    </Container>
  )
}

export default TypeAddCard

const Container = styled(Button)(({theme}) => ({
  width: '180px',
  height: '180px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: theme.palette.grey[200],
  borderRadius: '16px',
}))

const Add = styled(AddIcon)(({theme}) => ({
  color: theme.palette.primary.main,
  width: '28px',
  height: '28px',
}))
