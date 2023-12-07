import {Box, Button, Checkbox, Typography, styled} from '@mui/material'
import {
  Control,
  Controller,
  FieldValues,
  UseFormSetValue,
  UseFormWatch,
} from 'react-hook-form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import CheckBoxList from './checkbox-list'
import {formCheckboxData} from '../data.constant'
import useSignUpAgreement from '../hooks/use-sign-up-agreement'

interface FormAgreementProps {
  control: Control<FieldValues, any>
  setValue: UseFormSetValue<FieldValues>
  watch: UseFormWatch<FieldValues>
}

const isChecks = {
  age: false,
  terms: false,
  privacy: false,
  marketing: false,
  notification: false,
}

const SignUpAgreement = ({control, setValue, watch}: FormAgreementProps) => {
  const {checkedItems, handleCheckAll, handleCheckboxChange} =
    useSignUpAgreement(isChecks)
  const allChecked = watch('allChecked', false)
  const handleUseFormAllCheck = () => {
    const newValue = !allChecked
    setValue('allChecked', newValue)
    setValue('terms', newValue)
    setValue('age', newValue)
    setValue('privacy', newValue)
    setValue('marketing', newValue)
    setValue('notification', newValue)
    //useState는 UI적 체크업데이트
    //useForm은 회원가입 시 실제 체크여부가 되었는지 확인해주는 역할
  }

  return (
    <>
      <AgreementWrapper>
        <Typography
          variant="body3"
          mb={2}
          sx={{position: 'absolute', top: -27}}
        >
          약관동의
        </Typography>
        <Box
          sx={{
            borderBottom: '1px solid #E7E7E7',
          }}
        >
          <Controller
            name="allChecked" // 폼 데이터의 이름
            control={control} // react-hook-form의 control 객체
            defaultValue={false} // 기본값
            render={({field}) => (
              <Checkbox
                {...field}
                icon={<RadioButtonUncheckedIcon />} // 미선택 시 아이콘
                checkedIcon={<CheckCircleIcon sx={{color: '#131313'}} />} // 선택 시 아이콘
                checked={allChecked}
                onChange={e => {
                  field.onChange(e) // 기존 onChange 이벤트 호출
                  handleUseFormAllCheck()
                  handleCheckAll(e) // 사용자 정의 onChange 호출
                }}
              />
            )}
          />
          <Typography variant="body3">전체 동의</Typography>
        </Box>
        <CheckBoxList
          handleCheckboxChange={handleCheckboxChange}
          formCheckboxData={formCheckboxData}
          control={control}
          checkedItems={checkedItems}
        />
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          size="large"
          sx={{width: '100%'}}
        >
          회원가입하기
        </Button>
      </AgreementWrapper>
    </>
  )
}

export default SignUpAgreement

const AgreementWrapper = styled(Box)({
  width: 342,
  background: '#fff',
  border: '1px solid #E7E7E7',
  borderRadius: '16px',
  marginLeft: '16px',
  position: 'relative',
})
