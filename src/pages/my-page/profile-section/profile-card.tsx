import {Divider} from '@mui/material'
import CardContainer from '../base/card-container'
import MyPageButton from '../base/mypage-button'
import {CreateOutlined} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import ProfileCardType from './profile-card-type'
import ProfileCardProfile from './profile-card-profile'

interface proptype {
  name: string
  introduction: string
  follower: number
  following: number
  mytype: string
}

const ProfileCard = ({
  name,
  introduction,
  follower,
  following,
  mytype,
}: proptype) => {
  const navigate = useNavigate()
  const handleButtonClick = () => {
    navigate('/settings')
  }

  return (
    <CardContainer>
      <ProfileCardProfile
        name={name}
        introduction={introduction}
        follower={follower}
        following={following}
      />
      <Divider />
      <ProfileCardType mytype={mytype} />
      <Divider />
      <MyPageButton
        text="내 프로필 편집"
        onClick={handleButtonClick}
        icon={
          <CreateOutlined
            sx={{
              marginRight: '10px',
            }}
          />
        }
      />
    </CardContainer>
  )
}

export default ProfileCard