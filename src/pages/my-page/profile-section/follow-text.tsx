import {Typography, styled} from '@mui/material'

interface proptype {
  title: string
  count: number
}

const FollowText = ({title, count}: proptype) => {
  return (
    <>
      <Text>
        {`${title} `}
        <span style={{color: '#000'}}>{count}</span>
      </Text>
    </>
  )
}

export default FollowText

const Text = styled(Typography)(() => ({
  fontSize: '26.2px',
  color: '#a9a9a9',
  fontWeight: 500,
  width: '117px',
}))
