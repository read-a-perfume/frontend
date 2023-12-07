import MuiButton from '@components/base/mui-button'
import {Box, styled} from '@mui/material'
import React from 'react'
import {AddBannerSpan} from '../brand.style'

interface proptype {
  fileURL: string
  fileRef: React.RefObject<HTMLInputElement>
  enterprise: boolean
  setFILEURL: React.Dispatch<React.SetStateAction<string>>
}

const Banner = ({fileURL, fileRef, setFILEURL, enterprise}: proptype) => {
  const changeImageHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault()
    if (event.target.files) {
      const newFileURL = URL.createObjectURL(event.target.files[0])
      setFILEURL(newFileURL)
    }
  }
  return (
    <BannerContainer>
      {fileURL && (
        <BannerImage src={fileURL} alt="banner" enterprise={enterprise} />
      )}
      <input
        type="file"
        accept="image/jpg,image/png,image/jpeg"
        hidden
        ref={fileRef}
        onChange={changeImageHandler}
      />
      {enterprise && (
        <>
          <AddBannerSpan imageurl={fileURL} style={{zIndex: 2}}>
            {fileURL ? '배너 이미지 변경' : '배너 이미지 추가'}
          </AddBannerSpan>
          <MuiButton
            title="컴퓨터에서 가져오기"
            type={fileURL ? 'white' : 'dark'}
            width="137px"
            handleClick={() => {
              if (fileRef.current) {
                fileRef.current.click()
              }
            }}
          />
        </>
      )}
    </BannerContainer>
  )
}

export default Banner

const BannerContainer = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '470px',
  backgroundColor: '#F1F1F1',
  position: 'relative',
  top: 0,
}))

const BannerImage = styled('img')<{enterprise: boolean}>(({enterprise}) => ({
  position: 'absolute',
  top: 0,
  width: '100%',
  height: '100%',
  imageRendering: '-webkit-optimize-contrast',
  backfaceVisibility: 'hidden',
  objectFit: 'fill',
  filter: enterprise ? 'brightness(65%)' : '',
}))
