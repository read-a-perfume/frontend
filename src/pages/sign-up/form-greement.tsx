import {Box, Button, Checkbox, Grid, Typography} from '@mui/material'
import {ConsentBox, LoginLinkBox} from './sign-up-form'
import {theme} from '@theme/index'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Controller} from 'react-hook-form'

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
      <Grid item xs={10}>
        <Typography variant="body3" mb={2}>
          약관동의
        </Typography>
        <ConsentBox>
          <Box
            sx={{
              borderBottom: '1px solid',
              borderColor: theme.palette.grey[500],
              paddingBottom: 4,
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
                    checked={allChecked}
                    onChange={e => {
                      field.onChange(e) // 기존 onChange 이벤트 호출
                      handleSetValuesAllCheck()
                      handleCheckAll(e) // 사용자 정의 onChange 호출
                    }}

                    // 필요한 다른 Material-UI Checkbox 속성을 여기에 추가하십시오.
                  />
                )}
              />
              <label>전체동의</label>
            </div>
          </Box>
          <ul
            style={{
              padding: 0,
              margin: 0,
              marginTop: 8,
            }}
          >
            {formCheckboxData.map(item => (
              <li key={item.name}>
                <Controller
                  name={item.name}
                  control={control}
                  defaultValue={false}
                  rules={item.register}
                  render={({field}) => (
                    <Checkbox
                      {...field}
                      checked={checkedItems[item.name]}
                      onChange={e => {
                        console.log(field, 'filed')

                        field.onChange(e) // 기존 onChange 이벤트 호출
                        handleCheckboxChange(e) // 사용자 정의 onChange 호출
                      }}
                      // 필요한 다른 Material-UI Checkbox 속성을 여기에 추가하십시오.
                    />
                  )}
                />
                <label>{item.label}</label>
              </li>
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
      </Grid>
      <Grid item xs={10}>
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
      </Grid>
    </>
  )
}

export default FormAgreement
