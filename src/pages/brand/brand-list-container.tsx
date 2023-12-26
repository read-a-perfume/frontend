import { Box, styled } from "@mui/material";

const BrandListContainer = styled(Box)<{col: number}>(({col}) => ({
    marginTop: '44px 0 178px 0',
    display: 'grid',
    gap: '44.5px 24px',
    gridTemplateColumns: `repeat(${col},1fr)`,
    justifyItems: 'center',
    minHeight: '80vh',
  }))
  
  export default BrandListContainer;