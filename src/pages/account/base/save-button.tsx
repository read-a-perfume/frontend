import {Button, styled} from '@mui/material'

const SaveButton = styled(Button)(({theme}) => ({
  width: '124px',
  height: '42px',
  fontSize: theme.typography.body2.fontSize,
  color: 'white',
}))

SaveButton.defaultProps = {
  disableElevation: true,
  type: 'submit',
  variant: 'contained',
  "aria-label": '저장하기',
}

export default SaveButton
