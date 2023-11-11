import {
  Button,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import styled from '@emotion/styled'
import MainThumbnailUploadIcon from '@assets/icons/upload-icon'
import {useState} from 'react'
import DeleteIconSvg from '@mui/icons-material/Delete'

interface Props {
  handleThumbnailUpload: (
    event: React.ChangeEvent<HTMLInputElement>,
    value?: any,
  ) => void
  handleThumbnailDelete: (file: any, value?: any) => void
  files: string[]
}

const FormImageUpload = ({
  handleThumbnailDelete,
  handleThumbnailUpload,
  files,
}: Props) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null) // 열려있는 삭제 창의 인덱스

  //클릭한 이미지를 추척해야함

  const handleToggleIndex = index => {
    if (openIndex === index) {
      setOpenIndex(null)
    } else setOpenIndex(index)
  }

  return (
    <div>
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
        업로드
        <VisuallyHiddenInput
          type="file"
          name="files"
          accept=".jpg, .png"
          onChange={handleThumbnailUpload}
        />
      </Button>
      <MainThumbnailView>
        <MainThumbnailContainer>
          <MainThumbnailInfo>
            <MainThumbnailUploadIcon />
            <p>
              리뷰에서 보여줄 <br /> 사진이나 영상을 추가해주세요.
            </p>
            <span>최대 5개까지 가능</span>
          </MainThumbnailInfo>
        </MainThumbnailContainer>
        {files && (
          <MainThumbnailImage
            files={files[0]}
            value={files}
            id="fileInput"
            onClick={() => handleToggleIndex(0)}
          />
        )}
        {files[0] && openIndex === 0 && (
          <Popup
            handleThumbnailDelete={handleThumbnailDelete}
            files={files[0]}
          />
        )}
      </MainThumbnailView>
      <SubThumbnailGroup>
        {files.length &&
          files.slice(1).map((image, index) => (
            <SubThumbnailImage
              image={image}
              onClick={() => handleToggleIndex(index + 1)}
            >
              {files[index + 1] && openIndex === index + 1 && (
                <Popup
                  handleThumbnailDelete={handleThumbnailDelete}
                  files={image}
                />
              )}
            </SubThumbnailImage>
          ))}
      </SubThumbnailGroup>
    </div>
  )
}

export default FormImageUpload

const Popup = ({handleThumbnailDelete, files}: any) => {
  return (
    <List
      sx={{
        position: 'absolute',
        right: -20,
        top: -20,
        zIndex: 100,
        width: '80px',
        background: '#fff',
        paddding: 0,
        fontSize: 14,
        '&.MuiList-root': {
          padding: 0,
        },
        '& span.MuiTypography-root': {
          fontSize: 14,
        },
        '& .MuiListItemButton-root': {
          border: '1px solid black',
        },
      }}
    >
      <ListItemButton
        sx={{padding: 0}}
        onClick={() => handleThumbnailDelete(files)}
      >
        <ListItemIcon sx={{minWidth: 0}}>
          <DeleteIconSvg sx={{width: 24}} />
        </ListItemIcon>
        <ListItemText primary="지우기" />
      </ListItemButton>
    </List>
  )
}

const MainThumbnailView = styled.div<any>({
  position: 'relative',
  display: 'block',
  width: '516px',
  height: '549px',
  backgroundColor: '#FAFAFA',
  borderRadius: '20px',
  border: '1px solid  #EDEDED',
  cursor: 'pointer',
  marginBottom: '38px',
})

const MainThumbnailImage = styled.div<any>(props => ({
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundImage: props.files ? `url(${props.files})` : 'none',
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  zIndex: '1',
}))

const MainThumbnailContainer = styled.div({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '300px',
})

const MainThumbnailInfo = styled.div({
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
  zIndex: 20,
})
const SubThumbnailGroup = styled.div({
  display: 'flex',
  justifyContent: 'space-between',
})
const SubThumbnailImage = styled.div<any>(props => ({
  position: 'relative',
  display: 'block',
  width: '103px',
  height: '120px',
  borderRadius: '10px;',
  backgroundColor: '#FAFAFA',
  backgroundImage: props.image === '' ? `none` : `url(${props.image})`,
  backgroundSize: '100% 100%',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
}))
