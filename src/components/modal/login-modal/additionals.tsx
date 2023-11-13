import FlexBox from '@layouts/flex-box'
import {Typography} from '@mui/material'
import {theme} from '@theme/index'
import {LoginLayoutProps} from './login-modal.interface'
import {FindId, FindPassword} from './login-modal.style'

const Additionals = ({setCondition}: LoginLayoutProps) => {
  // const [checked, setChecked] = useState<boolean>(false);

  return (
    <>
      <FlexBox justifyContent="space-between">
        <FlexBox style={{marginTop: '4px'}}>
          {/* {checked ? (
            <Checked onClick={() => setChecked(!checked)} />
          ) : (
            <NotChecked onClick={() => setChecked(!checked)} />
          )} */}
          <Typography
            fontSize={theme.typography.body4.fontSize}
            fontWeight="500"
            color={theme.palette.grey[500]}
          >
            로그인 상태 유지
          </Typography>
        </FlexBox>
        <FlexBox alignItems="center">
          <FindPassword onClick={() => setCondition('password')}>
            비밀번호 찾기
          </FindPassword>
          <FindId onClick={() => setCondition('id')}>아이디 찾기</FindId>
        </FlexBox>
      </FlexBox>
    </>
  )
}

export default Additionals
