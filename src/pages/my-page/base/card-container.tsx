import {Box, styled} from '@mui/material'

const CardContainer = styled(Box)(() => ({
  maxWidth: '512px',
  minWidth: '512px',
  borderRadius: '15px',
  border: 'solid 1px #dbdbdb',
  padding: '24px 24px 0 24px',
  height: '380px',
  display: 'flex',
  flexDirection: 'column',
}));

export default CardContainer
