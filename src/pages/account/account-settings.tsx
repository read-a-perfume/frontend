import {useState} from 'react'
import {Button} from '@mui/material'
import FlexBox from '@layouts/flex-box.js'
import {Category, Input, Title} from './index.styles.js'
import {InputProps} from './index.js'
import CustomIcons from '@assets/icons/custom-Icons.js'
import styled from '@emotion/styled'

interface AccountSettingsProps {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}

const AccountSettings: React.FC<AccountSettingsProps> = ({
  inputs,
  setInputs,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  return (
    <div>
      <Title style={{marginTop: 36, marginBottom: 20}}>계정관리</Title>
      <Category style={{marginBottom: 10}}>이메일</Category>
      <Input
        value={inputs.email}
        onChange={event => setInputs({...inputs, email: event.target.value})}
        type="email"
        style={{height: 38}}
      />
      <Category>비밀번호</Category>
      <FlexBox alignItems='center'>
        <FlexBox alignItems="center">
          <Input
            style={{width: 188, height: 37, marginTop: 10, paddingRight: 42}}
            type={showPassword ? 'text' : 'password'}
            value={inputs.password}
            onChange={event =>
              setInputs({...inputs, password: event.target.value})
            }
          />
          {showPassword ? (
            <HidePasswordBox
              role="presentation"
              onClick={() => setShowPassword(false)}
            >
              <CustomIcons.ShowPassword />
            </HidePasswordBox>
          ) : (
            <ShowPasswordBox
              role="presentation"
              onClick={() => setShowPassword(true)}
            >
              <CustomIcons.HidePassword />
            </ShowPasswordBox>
          )}
        </FlexBox>
        <ChangePasswordButton>변경</ChangePasswordButton>
      </FlexBox>
      {/* <FlexBox alignItems="center" style={{height: 37}}>
        <FlexBox alignItems="center">
          <Input
            style={{width: 188, height: 37}}
            type={showPassword ? 'text' : 'password'}
            value={inputs.password}
            onChange={event =>
              setInputs({...inputs, password: event.target.value})
            }
          />
          {showPassword ? (
            <HidePasswordBox
              role="presentation"
              onClick={() => setShowPassword(false)}
            >
              <CustomIcons.ShowPassword />
            </HidePasswordBox>
          ) : (
            <ShowPasswordBox
              role="presentation"
              onClick={() => setShowPassword(true)}
            >
              <CustomIcons.HidePassword />
            </ShowPasswordBox>
          )}
        </FlexBox>
        <ChangePasswordButton>변경</ChangePasswordButton>
      </FlexBox> */}
      <FlexBox style={{width: '100%'}} alignItems="center">
        {/* <BoxBottomButtton>저장하기</BottomButton> */}
        <Button>저장하기</Button>
      </FlexBox>
    </div>
  )
}

const HidePasswordBox = styled.div({
  marginLeft: -36,
  zIndex: 1,
  background: 'white',
  height: 20,
  width: 20,
  cursor: 'pointer',
})

const ShowPasswordBox = styled.div({
  marginTop: -25,
  marginLeft: -36,
  zIndex: 1,
  background: 'white',
  height: 20,
  width: 20,
  cursor: 'pointer',
})

const ChangePasswordButton = styled.button({
  width: 65,
  height: 33,
  borderRadius: 10,
  border: '1px solid #DBDBDB',
  background: '#F1F1F5',
  fontSize: 14,
  fontWeight: '500',
  marginLeft: 34,
  color: 'black',
  marginTop: -23
})

export default AccountSettings
