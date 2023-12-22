import { Box, Typography, styled } from "@mui/material"

const Left = () => {
    return(
        <Container>
            <Title>설정 및 관리</Title>
        </Container>
    )
}


export default Left;

const Container = styled(Box)(()=>({
    paddingTop:'89px',
}))

const Title = styled(Typography)(({theme})=>({
    fontWeight:'bold',
    fontSize:theme.typography.h1.fontSize
}))