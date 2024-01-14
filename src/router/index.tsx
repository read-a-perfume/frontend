import GeneralLayout from '@layouts/general-layout.js'
import Brand from '@pages/brand/brand-page/index.js'
import Home from '@pages/home/index.js'
import Perfumes from '@pages/perfumes/index.js'
import SignUp from '@pages/sign-up/index.js'
import {createBrowserRouter} from 'react-router-dom'
import MyPage from '@pages/my-page/index'
import Account from '@pages/account/index'
import ReviewWriter from '@pages/reviews/review-writer'
import PerfumeDetail from '@pages/perfume-detail'
import SignIn from '@pages/sign-in'
import MagazineUpload from '@pages/brand/legacy/magazine-upload'
import BrandList from '@pages/brand/brand-list'
import ReviewListPage from '@pages/reviews/review-list'
import SearchPage from '@pages/search'
import {ReactNode} from 'react'
import AuthRedirect from '@layouts/auth-redirect'

interface RouterBase {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로
  label: string // 사이드바에 표시할 페이지 이름
  element?: React.ReactNode // 페이지 엘리먼트
  isLayout: boolean // 공통 레이아웃 컴포넌트 필요 여부.
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean // 인증이 필요한 페이지 여부
}

type RouterElement = UserAccessibleRouterElement | AdminAccessibleRouterElement

interface AdminAccessibleRouterElement extends RouterBase {
  withAuth: true // 인증이 필요한 페이지 여부
  isAdminPage?: boolean // 어드민 페이지 여부
}

const routerData: RouterElement[] = [
  {
    id: 0,
    label: '메인 페이지',
    path: '/',
    element: <Home />,
    isLayout: true,
    withAuth: false,
  },
  {
    id: 1,
    label: '로그인 페이지',
    path: '/sign-in',
    element: <SignIn />,
    isLayout: false,
    withAuth: false,
  },
  {
    id: 2,
    label: '회원가입 페이지',
    path: '/sign-up',
    element: <SignUp />,
    isLayout: false,
    withAuth: false,
  },
  {
    id: 3,
    label: '브랜드',
    path: '/brand/:brandId',
    element: <Brand />,
    isLayout: true,
    withAuth: false,
  },
  {
    id: 4,
    label: '리뷰 작성 페지',
    path: '/reviews/writer',
    element: <ReviewWriter />,
    isLayout: true,
    withAuth: true,
  },
  {
    id: 5,
    label: '제품리스트 페이지',
    path: '/perfumes',
    element: <Perfumes />,
    isLayout: true,
    withAuth: false,
  },
  {
    id: 6,
    label: '제품 상세 페이지',
    path: '/perfume/:id',
    element: <PerfumeDetail />,
    isLayout: true,
    withAuth: false,
  },
  {
    id: 6,
    label: '마이페이지',
    path: '/mypage/:userId',
    element: <MyPage />,
    isLayout: true,
    withAuth: true,
    isAdminPage: true,
  },
  {
    id: 7,
    label: '프로필 관리',
    path: '/settings',
    element: <Account />,
    isLayout: true,
    withAuth: true,
    isAdminPage: true,
  },
  {
    id: 8,
    label: '매거진 업로드',
    path: '/brand/upload',
    element: <MagazineUpload />,
    isLayout: true,
    withAuth: true,
  },
  {
    id: 9,
    label: '브랜드 목록',
    path: '/brands',
    element: <BrandList />,
    isLayout: true,
    withAuth: false,
  },
  {
    id: 10,
    label: '리뷰 목록 페이지',
    path: '/reviews',
    element: <ReviewListPage />,
    isLayout: true,
    withAuth: true,
  },
  {
    id: 11,
    label: '리뷰 목록 페이지',
    path: '/search',
    element: <SearchPage />,
    isLayout: true,
    withAuth: true,
  },
]

export const router = createBrowserRouter(
  routerData.map(router => {
    const element: ReactNode = router.element
    if (router.isLayout) {
      return {
        path: router.path,
        element: <GeneralLayout>{element}</GeneralLayout>,
      }
    }
    if (router.withAuth) {
      return {
        path: router.path,
        element: <AuthRedirect>{element}</AuthRedirect>,
      }
    }

    return {
      path: router.path,
      element: element,
    }
  }),
)
