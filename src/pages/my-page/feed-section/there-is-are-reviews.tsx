import { Box, Typography, styled } from "@mui/material"
import WriteButton from "./write-button"

const ThereAreNoReviews = () => {
    return(
        <Container>
            
            <Text>{`아직 리뷰가 없습니다. 리뷰를 채워주세요!`}</Text>
            <WriteButton/>
           
        </Container>
    )
}

export default ThereAreNoReviews

const Container = styled(Box)(({theme})=>({
    height: '310px',
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    borderRadius: '20px',
    border:`solid 1px ${theme.palette.grey[400]}`,
    backgroundColor: '#fff',
    width: '100%',
    flexDirection:'column',
    gap:'48px',
}))

const Text = styled(Typography)(({theme})=>({
    fontSize:theme.typography.h1.fontSize,
    color:theme.palette.grey[600],

}))