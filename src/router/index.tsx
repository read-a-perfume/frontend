import GeneralLayout from '@layouts/general-layout.js'
import Brand from '@pages/brand/index.js'
import Home from '@pages/home/index.js'
import Perfumes from '@pages/perfumes/index.js'
import SignUp from '@pages/sign-up/index.js'
import {createBrowserRouter} from 'react-router-dom'
import MyPage from '@pages/my-page/index'
import Account from '@pages/account/index'
import {Router as RemixRouter} from '@remix-run/router/dist/router'
import ReviewWriter from '@pages/reviews/review-writer'
import PerfumeDetail from '@pages/perfume-detail'
import SignIn from '@pages/sign-in'
import MagazineUpload from '@pages/brand/magazine-upload'
import BrandList from '@pages/brand/brand-list'
import ReviewDetails from '@pages/reviews/review-details'

interface RouterBase {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로

  label: string // 사이드바에 표시할 페이지 이름
  element: React.ReactNode // 페이지 엘리먼트
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
    withAuth: true,
  },
  {
    id: 1,
    label: '로그인 페이지',
    path: '/sign-in',
    element: <SignIn />,
    isLayout: true,
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
    path: '/brand',
    element: <Brand />,
    isLayout: true,
    withAuth: true,
  },
  {
    id: 4,
    label: '리뷰 작성 페지',
    path: '/reviews/review-writer',
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
    withAuth: true,
  },
  {
    id: 6,
    label: '제품 상세 페이지',
    path: '/perfume/:id',
    element: <PerfumeDetail />,
    isLayout: true,
    withAuth: true,
  },
  {
    id: 6,
    label: '마이페이지',
    path: '/mypage',
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
    withAuth: true,
  },
  {
    id: 10,
    label: '브랜드 목록',
    path: '/details',
    element: <ReviewDetails />,
    isLayout: false,
    withAuth: false,
  },
]

export const router: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    /// 공통 레이아웃이 필요하다면 공통 레이아웃 부여
    if (router.withAuth) {
      return {
        path: router.path,
        element: <GeneralLayout>{router.element}</GeneralLayout>,
      }
    }
    return {
      path: router.path,
      element: router.element,
    }
  }),
)
