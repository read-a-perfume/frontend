import {IfCategory} from 'types/perfume.interface'
import TypeCard from './type-card'
import Box from "@mui/material/Box";
import { styled } from "@mui/material";

interface proptype {
  data: IfCategory[]
}

const CardContainer = ({data}: proptype) => {
  return (
    <Container>
      {data.map(e => (
        <TypeCard key={e.id} data={e} />
      ))}
    </Container>
  )
}

export default CardContainer

const Container = styled(Box)(() => ({
  padding: '40.5px 40.5px 0 40.5px',
  display: 'grid',
  gridTemplateColumns: `repeat(3,1fr)`,
  justifyItems: 'center',
  gap: '20.5px 0',
  overflowY: 'scroll',
  maxHeight: '559.4px',
}))
