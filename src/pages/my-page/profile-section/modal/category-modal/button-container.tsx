import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { styled } from "@mui/material";
import { useFormContext } from 'react-hook-form'
import { FormCategoryDataType } from './util/util'

const ButtonContainer = () => {
  
  const {reset} = useFormContext<FormCategoryDataType>()

  return (
    <Container>
      <ModalButton mark="sub" variant="contained" onClick={()=>{reset()}}>
        초기화
      </ModalButton>
      <ModalButton variant="contained" type="submit">
        확인하기
      </ModalButton>
    </Container>
  )
}

export default ButtonContainer

const Container = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'flex-end',
  padding: '0 40.5px 0 40.5px',
  gap: '13.6px',
  marginTop: '33.3px',
}))

const ModalButton = styled(Button)<{mark?: string | undefined}>(
  ({mark, theme}) => ({
    height: '35.8px',
    fontSize: '13px',
    padding: '0 28.6px 0 28.6px',
    borderRadius: '8.5px',
    color: `${mark === 'sub' ? theme.palette.grey[600] : '#fff'}`,
    boxShadow: 'none',
    backgroundColor: `${
      mark === 'sub' ? theme.palette.grey[200] : theme.palette.primary.main
    }`,
    '&:hover': {
      backgroundColor: `${
        mark === 'sub' ? theme.palette.grey[200] : theme.palette.primary.main
      }`,
      boxShadow: 'none',
    },
  }),
)
