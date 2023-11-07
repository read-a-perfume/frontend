import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const ReviewLayout = styled.div({
  width: 512,
  height: 420,
  borderRadius: 16,
  border: '1px solid #EDEDED',
  background: 'white',
  padding: '17px 24px 0px 24px'
})

export const ReviewProfile = styled.div({
  width: 32,
  height: 32,
  borderRadius: 32,  
  background: 'tomato'
})

export const ReviewerID= styled(Typography)({
    fontSize: 16,
    fontWeight: "600",
    marginLeft: 16
})

export const ImageBox = styled.div({
    marginTop: 20,
    marginBottom: 14,
})

export const SingleImageCover = styled.div({
    width: '100%',
    height: 184,
    borderRadius: 16,
    background: 'lightgrey'
})

export const MainImageCover = styled.div({
    width: 306,
    height: 184,
    borderRadius: 16,
    background: 'grey'
})

export const OtherImages = styled.div({
    width: 142,
    height: 184,
    borderRadius: 15,
    background: 'lightgrey',
})

export const OtherImagesTypo = styled(Typography)({
    fontSize: 22,
    color: 'white',
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
})

export const ReviewText = styled(Typography)({
    fontSize: 16,
    lineHeight: '150%',
    color: '#131313'
})

export const HashTags = styled(Typography)({
    fontSize: 14,
    color: '#FE7156',
    marginTop: 16,
    marginBottom: 17,
})

export const Options = styled.div({
    width: '100%',
    height: 58,
    borderTop: '1px solid #EDEDED',
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 10,
    gap: 22
})

export const OptionsText = styled(Typography)({
    color: '#333',
    fontSize: 14,
    fontWeight: "500",
    marginLeft: 6
})