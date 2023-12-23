import FlexBox from '@layouts/flex-box.js'
import {Button, Typography} from '@mui/material'
import { InputProps } from './index.js'
import { Category, Input, Title } from './index.styles.js'
import styled from '@emotion/styled'
import TypeBox from './type-box.js'

const PublicProfile = ({
  inputs,
  setInputs,
}: {
  inputs: InputProps
  setInputs: React.Dispatch<React.SetStateAction<InputProps>>
}) => {
  return (
    <>
      <Title style={{marginTop: -16}}>공개 프로필</Title>
      <FlexBox alignItems="center">
        <Profile />
        <div>
          <Id>test</Id>
          <Button
            variant="text"
            style={{
              padding: 0,
              marginTop: -14,
              fontSize: 12,
              fontWeight: '500',
              color: '#5D9EFF',
            }}
          >
            프로필 사진 바꾸기
          </Button>
        </div>
      </FlexBox>
      <Category style={{marginBottom: 10}}>자기소개</Category>
      <Input
        value={inputs.introduction}
        onChange={event =>
          setInputs({...inputs, introduction: event.target.value})
        }
      />
      <FlexBox style={{width: 336}} justifyContent="space-between">
        <Category style={{marginBottom: 18}}>내 타입</Category>
        <Category style={{marginBottom: 18, cursor: 'pointer'}}>
          수정하기
        </Category>
      </FlexBox>
      <TypeBox />
    </>
  )
}

const Id = styled(Typography)({
  fontSize: 16,
  fontWeight: '600',
})

const Profile = styled.div({
  width: 90,
  height: 90,
  borderRadius: 64,
  background: 'red',
  marginRight: 27,
  marginTop: 25,
  marginBottom: 25
})

export default PublicProfile
