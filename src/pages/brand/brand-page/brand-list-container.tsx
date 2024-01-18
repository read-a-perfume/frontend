import Box from "@mui/material/Box";
import { styled } from "@mui/material";

const BrandListContainer = styled(Box)<{col: number}>(({col}) => ({
    display: 'grid',
    gap: '60px 32px',
    gridTemplateColumns: `repeat(${col},1fr)`,
    justifyItems: 'center',
    minHeight: '90vh',
    paddingTop: '44px',
    
  }))
  
  export default BrandListContainer;