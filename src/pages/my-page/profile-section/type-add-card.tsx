import {Button, styled} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'

interface proptype {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  flag: boolean
}

const TypeAddCard = ({setIsOpen, flag}: proptype) => {
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
