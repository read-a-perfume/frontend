import {Box, Button, Checkbox, Grid, Typography} from '@mui/material'
import {ConsentBox, LoginLinkBox} from './sign-up-form'
import {theme} from '@theme/index'
import RadioTerm from './checkbox-list'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {Controller} from 'react-hook-form'

const CheckData = [
  {
    label: '전체동의',
    name: 'all',
    subText: '선택항목에 대한 동의 포함',
  },
  {
    label: '만 14세 이상입니다.',
    name: 'required1',
    required: true,
  },
  {
    label: '이용약관',
    name: 'required2',
    required: true,
  },
  {
    label: '개인정보 수집 및 이용동의',
    name: 'required3',
    required: true,
  },
  {
    label: '개인정보 마케팅 활용 동의',
    name: 'optional1',
    required: false,
  },
  {
    label: '이벤트, 쿠폰, 특가 알림 메일 수신',
    name: 'optional2',
    required: false,
  },
]

const FormAgreement = () => {
  const [checkAll, setCheckAll] = useState(false)
  const [checkedItems, setCheckedItems] = useState({
    required1: false,
    required2: false,
    required3: false,
    optional1: false,
    optional2: false,
  })

  const handleCheckAll = event => {
    setCheckAll(event.target.checked)
    setCheckedItems({
      required1: event.target.checked,
      required2: event.target.checked,
      required3: event.target.checked,
      optional1: event.target.checked,
      optional2: event.target.checked,
    })
  }

  const handleCheckboxChange = event => {
    setCheckedItems({
      ...checkedItems,
      [event.target.name]: event.target.checked,
    })
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
            <RadioTerm
              label="전체동의"
              name="all"
              checked={checkAll}
              onChange={handleCheckAll}
              subText="선택항목에 대한 동의 포함"
            />
          </Box>
          <ul
            style={{
              padding: 0,
              margin: 0,
              marginTop: 8,
            }}
          >
            {CheckData.slice(1, 6).map(it => (
              <RadioTerm
                label={it.label}
                name={it.name}
                checked={checkedItems[`${it.name}`]}
                onChange={handleCheckboxChange}
                required={it.required}
              />
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
