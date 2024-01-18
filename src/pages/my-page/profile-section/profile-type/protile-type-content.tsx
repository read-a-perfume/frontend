import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";
import TypeInfoCard from './type-info-card'
import TypeAddCard from './type-add-card'
import {useContext} from 'react'
import TypeModal from '../modal/category-modal'
import {TypeContext} from '.'

const indexArr: {id: string}[] = [{id: 'sad'}, {id: 'gfd'}, {id: 'fkf'}]

const ProfileTypeContent = () => {
  const {data, isOpen, setIsOpen} = useContext(TypeContext)

  return (
    <Box sx={{marginLeft: 'auto'}}>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <TypeModal />
      </Modal>
      <Title>MY TYPE</Title>
      <TypeContainer>
        {indexArr.map((e, i) =>
          i < data.length ? (
            <TypeInfoCard data={data[i]} key={data[i].id} />
          ) : (
            <TypeAddCard key={e.id} />
          ),
        )}
      </TypeContainer>
    </Box>
  )
}

export default ProfileTypeContent

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
