import Box from '@mui/material/Box'
import Checkbox from '@mui/material/Checkbox'
import Typography from '@mui/material/Typography'
import {styled} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import useAgreeSignUp from '../hooks/use-agree-sign-up'
const AllAgreeChecbox = ({method, title}: any) => {
  const {handleUseFormAllCheck} = useAgreeSignUp()
  return (
    <AgrrementCheckBoxWrapper>
      <Checkbox
        {...method.field}
        checked={method.field.value}
        icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
        checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
        onClick={handleUseFormAllCheck}
      />
      <Typography variant="body3">{title}</Typography>
    </AgrrementCheckBoxWrapper>
  )
}

export default AllAgreeChecbox
const AgrrementCheckBoxWrapper = styled(Box)({
  borderBottom: '1px solid #E7E7E7',
})
