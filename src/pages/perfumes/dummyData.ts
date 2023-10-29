import img2 from './images/Rectangle7217(1).png'
import img3 from './images/Rectangle7217(2).png'
import img4 from './images/Rectangle7217(3).png'
import img5 from './images/Rectangle7217(4).png'

interface BrandDummyData {
  id: string
  url: string
  brandName: string
  perfumeName: string
  description: string
}

// 10월29일 디자이너분과 회의후에 수정할 예정

const brandDummyData: BrandDummyData[] = [
  {
    id: '0',
    url: img2,
    brandName: '구딸파리',
    perfumeName: '로즈폼퐁 오 드 퍼퓸',
    description:
      '햇살처럼 번지는 오렌지와<br /> 무화과 나무에서 퍼지는 달콤한 향기',
  },
  {
    id: '1',
    url: img3,
    brandName: '구딸파리',
    perfumeName: '로즈폼퐁 오 드 퍼퓸',
    description:
      '햇살처럼 번지는 오렌지와<br /> 무화과 나무에서 퍼지는 달콤한 향기',
  },
  {
    id: '2',
    url: img4,
    brandName: '구딸파리',
    perfumeName: '로즈폼퐁 오 드 퍼퓸',
    description:
      '햇살처럼 번지는 오렌지와<br /> 무화과 나무에서 퍼지는 달콤한 향기',
  },
  {
    id: '3',
    url: img5,
    brandName: '구딸파리',
    perfumeName: '로즈폼퐁 오 드 퍼퓸',
    description:
      '햇살처럼 번지는 오렌지와<br /> 무화과 나무에서 퍼지는 달콤한 향기',
  },
]

export default brandDummyData
