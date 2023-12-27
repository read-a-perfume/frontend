import Card from '@components/base/card.js'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Magazine = ({
  enterprise,
  data,
}: {
  enterprise: boolean
  data: {
    id: number
    image: string
    title: string
    content: string
    hashtag: string[]
  }
}) => {
  const navigate = useNavigate()
  const [optionsOpen, setOptionsOpen] = useState<boolean>(false)

  return (
    <Card
      coverImage={'/images/brand-magazine.png'}
      profileImage={'/images/brand-magazine.png'}
      title={data.title}
      content={data.content}
      hashTags={data.hashtag}
      onClick={() => navigate(`/brand/:id/magazine/${data.id}`)}
      isEditor={enterprise}
      isOptionOpen={optionsOpen}
      onClickHamburger={() => setOptionsOpen(true)}
    />
  )
}

export default Magazine
