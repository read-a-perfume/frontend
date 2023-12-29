import { Box, styled } from "@mui/material";

const BrandListContainer = styled(Box)<{col: number}>(({col}) => ({
    marginTop: '44px 0 178px 0',
    display: 'grid',
    gap: '60px 32px',
    gridTemplateColumns: `repeat(${col},1fr)`,
    justifyItems: 'center',
    minHeight: '90vh',
    padding: '44px 0',
    
  }))
  
  export default BrandListContainer;