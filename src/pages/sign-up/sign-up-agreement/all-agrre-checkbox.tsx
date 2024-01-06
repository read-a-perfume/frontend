import {Box, Checkbox, Typography, styled} from '@mui/material'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import useAgreeSignUp from '../hooks/use-agree-sign-up'
const AllAgreeChecbox = ({allCheck, title}: any) => {
  const {handleUseFormAllCheck} = useAgreeSignUp()
  return (
    <AgrrementCheckBoxWrapper>
      <Checkbox
        {...allCheck.field}
        icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
        checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
        checked={allCheck.field.value}
        onChange={e => {
          allCheck.field.onChange(e) // 기존 onChange 이벤트 호출
          handleUseFormAllCheck()
        }}
      />
      <Typography variant="body3">{title}</Typography>
    </AgrrementCheckBoxWrapper>
  )
}

export default AllAgreeChecbox
const AgrrementCheckBoxWrapper = styled(Box)({
  borderBottom: '1px solid #E7E7E7',
})
