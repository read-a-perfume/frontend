import Button from '@mui/material/Button'
import {styled} from '@mui/material'

const SettingButton = styled(Button)(({theme}) => ({
  height: '33px',
  border: 'solid 1.7px #ededed',
  color: 'black',
  backgroundColor: 'white',
  '&:hover': {
    backgroundColor: '#eee',
  },
  fontSize: theme.typography.body3.fontSize,
}))

SettingButton.defaultProps = {
  'aria-label': '설정하기',
}

export default SettingButton
