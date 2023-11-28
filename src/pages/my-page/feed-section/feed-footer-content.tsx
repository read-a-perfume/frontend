import { Typography, styled } from "@mui/material";
import { ReactNode } from "react";

interface proptype{
    icon:ReactNode;
    title:string;
    value:number;
}

const FeedFooterContent = ({icon,title,value}:proptype) => {
    return(
        <div style={{display:'flex',alignItems:'center'}}>
            {icon}
            <FooterText>{`${title} ${value}개`}</FooterText>
        </div>
    )
}

export default FeedFooterContent;

const FooterText = styled(Typography)`
font-family: Pretendard;
  font-size: 14px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: left;
  color: #333;
  margin-left: 8px;
`