import Magazines from './magazines'
import Notes from './notes'
import Review from './review'
import {Banner, BannerBox, BannerImage, Content, Title} from './index.style'
import Button from '@components/base/button.js'
import Products from './products.js'
import {useNavigate} from 'react-router-dom'
import {IfCategoryNameType} from '@components/category/interfaces.js'
import {fetchCategories} from 'src/store/server/categories/queries.js'
import {useQuery} from '@tanstack/react-query'

export default function Home() {
  const navigate = useNavigate()

  const {
    isLoading: categoryLoading,
    error: categoryError,
    data: categories,
  } = useQuery<IfCategoryNameType[]>({
    queryKey: ['categories'],
    queryFn: fetchCategories,
    staleTime: 99999,
  })

  // useEffect(() => {
  //   if (!isLoggedIn) {
  //     navigate('/sign-in')
  //   }
  // }, [])

  return (
    <>
      <Banner>
        <BannerImage src="/images/banner.png" alt="banner" />
        <BannerBox>
          <Title>
            REED A PERFUME에 오신것을 환영합니다.
            <br />
            향에 담긴 이야기, 당신만의 리뷰를 펼쳐보세요.
          </Title>
          <Button
            text="리뷰 작성하기"
            width="178px"
            height="54px"
            color="white"
            backgroundColor="transparent"
            fontSize="lg"
            onClick={() => navigate('/reviews/review-writer')}
            style={{marginTop: '79px', zIndex: 2, border: '1px solid white'}}
          />
        </BannerBox>
      </Banner>
      <Content>
        <Magazines />
        <Notes
          categoryLoading={categoryLoading}
          categoryError={categoryError}
          categories={categories}
        />
        <Review />
        <Products />
      </Content>
    </>
  )
}
