import {Box, Button, Typography, styled} from '@mui/material'
import ModalContainer from './modal-container'

const TypeModal = () => {
  return (
    <ModalContainer>
      <Bar>마이 타입</Bar>
      <TestBox>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(e => (
          <TestCard key={e}></TestCard>
        ))}
      </TestBox>
      <ButtonContainer>
        <ModalButton mark="sub" variant="contained">
          초기화
        </ModalButton>
        <ModalButton variant="contained">확인하기</ModalButton>
      </ButtonContainer>
    </ModalContainer>
  )
}

export default TypeModal

const Bar = styled(Typography)(({theme}) => ({
  height: '67.4px',
  width: '100%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  borderBottom: 'solid 1px #101010',
  fontSize: theme.typography.body1.fontSize,
}))

const ButtonContainer = styled(Box)(() => ({
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

//1.17143
const TestBox = styled(Box)(() => ({
  padding: '40.5px 40.5px 0 40.5px',
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  gap: '20.5px 0',
}))

const TestCard = styled(Box)(() => ({
  width: '128.1px',
  height: '153.7px',
  borderRadius: '8px',
  backgroundColor: '#dbdbdb',
}))
