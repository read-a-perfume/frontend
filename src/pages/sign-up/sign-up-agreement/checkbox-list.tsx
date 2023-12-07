import {Box, Checkbox, FormLabel, styled} from '@mui/material'
import {Controller} from 'react-hook-form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import FormAgreementModal from './form-agreement-modal'

interface CheckBoxList {
  formCheckboxData: any
  control: any
  handleCheckboxChange: any
  checkedItems: any
}

const CheckBoxList = ({
  formCheckboxData,
  control,
  handleCheckboxChange,
  checkedItems,
}: CheckBoxList) => {
  return (
    <ul>
      {formCheckboxData.map((item, index) => (
        <CheckboxItem key={item.name}>
          <Controller
            name={item.name}
            control={control}
            defaultValue={false}
            rules={item.register}
            render={({field}) => (
              <Checkbox
                {...field}
                checked={checkedItems[item.name]}
                icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
                checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
                onChange={e => {
                  field.onChange(e) // 기존 onChange 이벤트 호출
                  handleCheckboxChange(e) // 사용자 정의 onChange 호출
                }}
              />
            )}
          />
          <FormLabel sx={{fontSize: '14px', color: '#000'}}>
            {item.label}
          </FormLabel>
          {(index === 1 || index === 2 || index === 3) && (
            <FormAgreementModal index={index} />
          )}
        </CheckboxItem>
      ))}
    </ul>
  )
}

export default CheckBoxList
const CheckboxItem = styled(Box)({
  position: 'relative',
})
