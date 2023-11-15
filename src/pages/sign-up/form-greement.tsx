import {Box, Button, Checkbox, Typography} from '@mui/material'
import {ConsentBox, LoginLinkBox} from './sign-up-form'
import {theme} from '@theme/index'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Controller} from 'react-hook-form'
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked'
import CheckCircleIcon from '@mui/icons-material/CheckCircle'
import styled from '@emotion/styled'
import FormAgreementModal from './form-agreement-modal'
import FormLabel from '@mui/material/FormLabel'
const FormAgreement: any = ({formCheckboxData, control, setValue, watch}) => {
  const [checkedItems, setCheckedItems] = useState({
    age: false,
    terms: false,
    privacy: false,
    marketing: false,
    notification: false,
  })
  // 전체 체크 여부를 확인할 state

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
  }
  const handleCheckAll = event => {
    setCheckedItems({
      age: event.target.checked,
      terms: event.target.checked,
      privacy: event.target.checked,
      marketing: event.target.checked,
      notification: event.target.checked,
    })
  }

  const allChecked = watch('allChecked', false)
  const handleSetValuesAllCheck = () => {
    const newValue = !allChecked
    setValue('allChecked', newValue)
    // 다른 체크박스 필드들도 추가
    setValue('terms', newValue)
    setValue('age', newValue)
    setValue('privacy', newValue)
    setValue('marketing', newValue)
    setValue('notification', newValue)
    // 추가적인 체크박스들에 대해서도 setValue로 업데이트
  }

  return (
    <>
      <Box
        sx={{
          width: 342,
          background: '#fff',
          border: '1px solid #E7E7E7',
          borderRadius: '16px',
          marginLeft: '16px',
          position: 'relative',
        }}
      >
        <Typography
          variant="body3"
          mb={2}
          sx={{position: 'absolute', top: -27}}
        >
          약관동의
        </Typography>
        <ConsentBox>
          <Box
            sx={{
              borderBottom: '1px solid #E7E7E7',
              marginBottom: '22px',
            }}
          >
            <div>
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
                      handleSetValuesAllCheck()
                      handleCheckAll(e) // 사용자 정의 onChange 호출
                    }}
                  />
                )}
              />
              <label>전체동의 </label>
            </div>
          </Box>
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
        </ConsentBox>
        <Button
          type="submit"
          variant="contained"
          color="inherit"
          size="large"
          style={{
            width: '100%',
          }}
        >
          회원가입하기
        </Button>
      </Box>

      <LoginLinkBox>
        <Typography color={theme.palette.grey[400]} variant="body4">
          이미 회원이신가요?
        </Typography>
        <Link
          to="#"
          style={{
            cursor: 'pointer',
            margin: '0px 4px',
            padding: 0,
            backgroundColor: 'transparent',
            border: 'none',
            color: theme.palette.secondary.main,
            textDecoration: 'underline',
            marginLeft: 8,
          }}
        >
          로그인하기
        </Link>
      </LoginLinkBox>
    </>
  )
}

export default FormAgreement

const CheckboxItem = styled.div({
  position: 'relative',
})
