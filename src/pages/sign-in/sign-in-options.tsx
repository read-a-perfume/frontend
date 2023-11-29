import {
  Box,
  Checkbox,
  FormControlLabel,
  Typography,
  styled,
} from '@mui/material'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'

const checkData = {
  checkoff: (
    <CheckCircleOutlineIcon sx={{color: '#707070', fontSize: '18px'}} />
  ),
  checkon: <CheckCircleIcon sx={{color: '#131313', fontSize: '18px'}} />,
}

interface SignInFormWithAdditionalOptionsProps {
  label: string
  option1: string
  option2: string
}

const SignInOptions = ({
  label,
  option1,
  option2,
}: SignInFormWithAdditionalOptionsProps) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <CheckBoxControll
        control={
          <Checkbox
            icon={checkData.checkoff} // 미선택 시 아이콘
            checkedIcon={checkData.checkon} // 선택 시 아이콘
          />
        }
        label={label}
        sx={{fontSize: theme => theme.typography.body4}}
      />
      <Box>
        <Typography variant="body4">{option1}</Typography>
        <Typography variant="body4">{option2}</Typography>
      </Box>
    </Box>
  )
}

export default SignInOptions

const CheckBoxControll = styled(FormControlLabel)({
  '.MuiTypography-root': {
    fontSize: '13px',
  },
})
