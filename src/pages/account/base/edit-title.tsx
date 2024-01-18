import Typography from "@mui/material/Typography";
import { styled } from "@mui/material";

interface proptype {
  title: string
}

const EditTitle = ({title}: proptype) => {
  return <Title>{title}</Title>
}

export default EditTitle

const Title = styled(Typography)(({theme}) => ({
  color: '#000',
  fontSize: theme.typography.body1.fontSize,
  fontWeight: 600,
  marginBottom: '25px',
}))
