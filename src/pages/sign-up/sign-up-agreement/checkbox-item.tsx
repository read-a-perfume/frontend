import {Box, Checkbox, FormLabel} from '@mui/material'

import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'

interface CheckBoxList {
  label: string
  method: any
}

const CheckBoxItem = ({method, label}: CheckBoxList) => {
  return (
    <ul>
      <Box key={label} sx={{position: 'relative'}}>
        <Checkbox
          {...method.field}
          checked={method.field.value}
          value={method.field.value}
          icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
          checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
          onChange={method.field.onChange}
        />
        <FormLabel sx={{fontSize: '14px', color: '#000'}}>{label}</FormLabel>
      </Box>
    </ul>
  )
}

export default CheckBoxItem
