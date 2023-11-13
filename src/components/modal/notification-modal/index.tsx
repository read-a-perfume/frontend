import styled from '@emotion/styled'
import FlexBox from '@layouts/flex-box.js'
import {Box, Modal, Typography} from '@mui/material'
import {ModalProps} from '../login-modal/login-modal.interface.js'
import CloseIcon from '@mui/icons-material/Close'
export const ModalStyle = styled(Modal)({
  width: 350,
  height: 532,
  top: '4%',
  left: '74%',
})

export const ModalLayout = styled(Box)({
  width: '100%',
  height: '100%',
  background: 'white',
  borderRadius: 20,
  border: '1px solid #BDBDBD',
  outline: 'none',
})

const Title = styled(Typography)({
  fontSize: 24,
  fontWeight: '600',
  marginLeft: 8,
})

const AlarmTitle = styled(Typography)({
  fontSize: 16,
  fontWeight: '500',
  marginRight: 8,
})

const Article = styled(Typography)({
  fontSize: 14,
  fontWeight: '500',
  color: '#7B7B7B',
  marginTop: 8,
})

const Time = styled(Typography)({
  fontSize: 13,
  color: '#A9A9A9',
})

const testData = [
  {
    title: '향수 이름',
    time: new Date(),
    article: '** 새로운 향수 리뷰가 게시되었습니다',
  },
  {
    title: '이벤트 정보',
    time: new Date(),
    article: '오늘의 특가 이벤트 ** 50% 할인!',
  },
  {
    title: '추천 항목',
    time: new Date(2023, 7, 10),
    article: '**가 **님의 취향과 일치합니다!',
  },
]

function NotificationModal({isOpen, setIsOpen}: ModalProps) {
  return (
    <ModalStyle open={isOpen} onClose={() => setIsOpen(false)}>
      <ModalLayout>
        <FlexBox
          style={{
            height: 78,
            borderBottom: '1px solid #BDBDBD',
            padding: '0px 20px',
          }}
          alignItems="center"
          justifyContent="space-between"
        >
          <Title>알림</Title>
          <div
            role="presentation"
            onClick={() => setIsOpen(false)}
            style={{marginBottom: -10}}
          >
            <CloseIcon />
          </div>
        </FlexBox>
        <div
          style={{
            paddingTop: 20,
            paddingLeft: 31,
            paddingRight: 31,
          }}
        >
          {testData
            .filter(
              el =>
                el.time.getFullYear() === new Date().getFullYear() &&
                el.time.getMonth() === new Date().getMonth() &&
                el.time.getDate() === new Date().getDate(),
            )
            .map(el => (
              <div key={el.time.toISOString()} style={{marginBottom: 20}}>
                <FlexBox alignItems="center">
                  <AlarmTitle>{el.title}</AlarmTitle>
                  <Time>· {el.time.toISOString().split('T')[0]}</Time>
                </FlexBox>
                <Article>{el.article}</Article>
              </div>
            ))}
          <hr
            style={{
              border: 'none',
              height: 1,
              background: '#BDBDBD',
              margin: '20px 0px',
            }}
          />
          {testData
            .filter(
              el =>
                el.time.getFullYear() !== new Date().getFullYear() ||
                el.time.getMonth() !== new Date().getMonth() ||
                el.time.getDate() !== new Date().getDate(),
            )
            .map(el => (
              <div key={el.time.toISOString()} style={{marginBottom: 20}}>
                <FlexBox alignItems="center">
                  <AlarmTitle>{el.title}</AlarmTitle>
                  <Time>· {el.time.toISOString().split('T')[0]}</Time>
                </FlexBox>
                <Article>{el.article}</Article>
              </div>
            ))}
        </div>
      </ModalLayout>
    </ModalStyle>
  )
}

export default NotificationModal
