import {Box, Typography, styled} from '@mui/material'
import {useRef, useState} from 'react'
import CustomIcons from '@assets/icons/custom-Icons'
import MuiButton from '@components/base/mui-button'

const CoverUpload = () => {
  const [fileURL, setFILEURL] = useState<string>('')
  const fileRef = useRef<HTMLInputElement>(null)

  const changeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0])
      setFILEURL(newFileURL)
    }
  }

  return (
    <CoverContainer>
      {fileURL && <CoverImage src={fileURL} alt="banner" />}
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg"
        hidden
        ref={fileRef}
        onChange={changeImageHandler}
      />

      <CoverContent>
        <CustomIcons.ImageUploadIcon color={fileURL ? 'white' : '#b4b4b4'} />
        <CoverText flag={fileURL !== ''}>{`매거진에서 보여줄 커버 이미지를 ${
          fileURL ? '변경' : '추가'
        }하세요.`}</CoverText>
        <MuiButton
          height="34px"
          title={`커버 이미지 ${fileURL ? '변경' : '추가'}`}
          type={fileURL ? 'primary' : 'white'}
          width="137px"
          handleClick={() => {
            if (fileRef.current) {
              fileRef.current.click()
            }
          }}
        />
      </CoverContent>
    </CoverContainer>
  )
}

export default CoverUpload

const CoverContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '470px',
  backgroundColor: '#FFF',
  position: 'relative',
  top: 0,
}))

const CoverContent = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '16px',
  zIndex: 1,
}))

const CoverImage = styled('img')(() => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
  objectFit: 'fill',
  filter: 'brightness(65%)',
}))

const CoverText = styled(Typography)<{flag: boolean}>(({flag}) => ({
  width: '165px',
  height: '52px',
  fontSize: '16px',
  fontWeight: 600,
  lineHeight: 1.6,
  color: flag ? 'white' : '#191919',
  textAlign: 'center',
}))
