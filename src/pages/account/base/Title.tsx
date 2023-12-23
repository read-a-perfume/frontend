import { Typography, styled } from "@mui/material";

interface proptype{
    title:string
}

const Title = ({title}:proptype) => {
    return(
        <TitleText>{title}</TitleText>
    )
}

const TitleText = styled(Typography)(()=>({

}))

export default Title;

