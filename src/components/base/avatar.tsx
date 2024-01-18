import styled from '@mui/material/styles/styled'

interface AvatarProps {
  size: string
  url: string | undefined
  style?: React.CSSProperties
}

const Avatar: React.FC<AvatarProps> = ({size, url, style}) => {
  return (
    <Image
      size={size}
      src={url}
      url={url}
      alt="editor-profile-image"
      style={{...style}}
    />
  )
}

const Image = styled('img')(
  ({url, size}: {url: string | undefined; size: string}) => ({
    width: size,
    height: size,
    borderRadius: '100%',
    objectFit: 'cover',
    backgroundColor: 'white',
    border: !url ? '1px solid black' : 'none',
  }),
)

export default Avatar
