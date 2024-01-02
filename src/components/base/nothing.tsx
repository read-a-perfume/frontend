import {Typography} from '@mui/material'

interface proptype{
    text?:string
}

const Nothing = ({text="아직 아무것도 없어요"}:proptype) => {
  return (
    <Typography variant="h2" sx={{color: '#bbb'}}>
        {text}
    </Typography>
  )
}

export default Nothing
