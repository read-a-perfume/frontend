import Button from '@components/base/button.js'
import {Typography} from '@mui/material'
import {theme} from '@theme/index'
import {useNavigate} from 'react-router-dom'

const IdResult = () => {
  const navigate = useNavigate()
  const id = 'Hyejin'

  const convertId = (id: string) => {
    const left = id.slice(0, 3)
    const hide = id.length - left.length
    return left + '*'.repeat(hide)
  }

  return (
    <div style={{marginTop: '83px'}}>
      <Typography
        fontSize={theme.typography.h1.fontSize}
        fontWeight="700"
        style={{marginBottom: '19px'}}
      >
        고객님의 아이디는..
      </Typography>
      <Typography
        fontSize={theme.typography.body2.fontSize}
        fontWeight="500"
        color={theme.palette.grey[800]}
        style={{marginBottom: '28px'}}
      >
        {convertId(id)}입니다.
      </Typography>
      <Button
        text="로그인하기"
        fullWidth
        fontSize="lg"
        onClick={() => navigate('/login')}
        backgroundColor="secondary"
      />
    </div>
  )
}

export default IdResult
