import {Button, ButtonGroup} from '@mui/material'
import styled from '@emotion/styled'
import PopupFormFirst from './popup-form-first'
import PopupFormSecond from './popup-form-second'
import PlusIcon from '@assets/icons/plus-icon'
import UploadIcon from '@assets/icons/upload-icon'

const PopupBody = ({pageMove}: any) => {
  const handleSubmit = event => {
    event.preventDefault()
    // 선택된 값에 따른 작업 수행
    const formData = new FormData(event.currentTarget)

    console.log(formData.get('image1'), 'event target')
  }

  const PopupImageUpload = () => {
    const UploadWrapper = styled.div({
      position: 'relative',
      width: '516px',
      height: '549px',
      backgroundColor: '#FAFAFA',
      borderRadius: '20px',
      border: '1px solid  #EDEDED',
    })
    const UploadContainer = styled.div({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: '300px',
    })

    const PopupFigure = styled.div({
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      gap: '20px',
      '& > p': {
        fontSize: '22px',
      },
      '& > span': {
        display: 'block',
        fontSize: '16px',
        color: '#A9A9A9',
      },
    })

    const VisuallyHiddenInput = styled('input')({
      clip: 'rect(0 0 0 0)',
      clipPath: 'inset(50%)',
      height: 1,
      overflow: 'hidden',
      position: 'absolute',
      bottom: 0,
      left: 0,
      whiteSpace: 'nowrap',
      width: 1,
    })

    //업로드 5개버튼 만들기

    interface MUICustomButtonProps {
      name: string
    }

    const MUICustomButton = ({name}: MUICustomButtonProps) => {
      return (
        <Button component="label" variant="contained" startIcon={<PlusIcon />}>
          <VisuallyHiddenInput type="file" accept="image/*" name={name} />
        </Button>
      )
    }

    const NewButton = styled(ButtonGroup)({
      '&.MuiButtonGroup-root': {
        display: 'flex',
        justifyContent: 'space-between',
        paddingTop: '25px',
        paddingBottom: '32px',
      },
      '.MuiButtonBase-root': {
        width: '103px',
        height: '120px',
        borderRadius: '10px;',
        background: '#FAFAFA',
      },
    })

    return (
      <div>
        <UploadWrapper>
          <UploadContainer>
            <PopupFigure>
              <UploadIcon />
              <p>
                리뷰에서 보여줄 <br /> 사진이나 영상을 추가해주세요.
              </p>
              <span>최대 5개까지 가능</span>
              <Button
                component="label"
                variant="contained"
                sx={{
                  backgroundColor: '#202020',
                  borderRadius: 19,
                  color: '#fff',
                  fontWeight: 400,
                }}
              >
                컴퓨터에서 가져오기
                <VisuallyHiddenInput type="file" />
              </Button>
            </PopupFigure>
          </UploadContainer>
        </UploadWrapper>
        <NewButton>
          <MUICustomButton name="image1" />
          <MUICustomButton name="image2" />
          <MUICustomButton name="image3" />
          <MUICustomButton name="image4" />
        </NewButton>
        {/* <UploadButton /> */}
      </div>
    )
  }

  //향수 리뷰 적는곳

  return (
    <form onSubmit={handleSubmit}>
      <Container>
        <PopupImageUpload />

        {pageMove === 0 ? <PopupFormFirst /> : <PopupFormSecond />}
      </Container>
    </form>
  )
}

export default PopupBody

const Container = styled.div({
  display: 'flex',
  gap: '33px',
})
