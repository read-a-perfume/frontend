import GeneralLayout from '@layouts/general-layout.js'
import Home from '@pages/home/index.js'
import {createBrowserRouter} from 'react-router-dom'
import MagazineUpload from '@pages/brand/legacy/magazine-upload'
import SearchPage from '@pages/search'
import {ReactNode} from 'react'
import AuthRedirect from '@layouts/auth-redirect'
import {
  LazyReviewListPage,
  LazySignUpPage,
  LazyReviewWriterPage,
  LazySignInPage,
  LazyPerfumeDetailsPage,
  LazyPerfumesPage,
  LazyBrandDetailsPage,
  LazyBrandsPage,
  LazyAccoutntPage,
  LazyMyPage,
} from './lazy-pages'
interface RouterBase {
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
    label: '메인 페이지',
    path: '/',
    element: <Home />,
    isLayout: true,
    withAuth: false,
  },
  {
    label: '로그인 페이지',
    path: '/sign-in',
    element: <LazySignInPage />,
    isLayout: false,
    withAuth: false,
  },
  {
    label: '회원가입 페이지',
    path: '/sign-up',
    element: <LazySignUpPage />,
    isLayout: false,
    withAuth: false,
  },
  {
    label: '리뷰 목록 페이지',
    path: '/reviews',
    element: <LazyReviewListPage />,
    isLayout: true,
    withAuth: true,
  },
  {
    label: '리뷰 작성 페이지',
    path: '/reviews/writer',
    element: <LazyReviewWriterPage />,
    isLayout: true,
    withAuth: true,
  },
  {
    label: '제품리스트 페이지',
    path: '/perfumes',
    element: <LazyPerfumesPage />,
    isLayout: true,
    withAuth: false,
  },
  {
    label: '제품 상세 페이지',
    path: '/perfume/:id',
    element: <LazyPerfumeDetailsPage />,
    isLayout: true,
    withAuth: false,
  },
  {
    label: '브랜드 상세페이지',
    path: '/brand/:brandId',
    element: <LazyBrandDetailsPage />,
    isLayout: true,
    withAuth: false,
  },
  {
    label: '브랜드 목록',
    path: '/brands',
    element: <LazyBrandsPage />,
    isLayout: true,
    withAuth: false,
  },
  {
    label: '검색 페이지',
    path: '/search',
    element: <SearchPage />,
    isLayout: true,
    withAuth: true,
  },
  {
    label: '마이페이지',
    path: '/mypage/:userId',
    element: <LazyMyPage />,
    isLayout: true,
    withAuth: true,
    isAdminPage: true,
  },
  {
    label: '프로필 관리',
    path: '/settings',
    element: <LazyAccoutntPage />,
    isLayout: true,
    withAuth: true,
    isAdminPage: true,
  },
  {
    label: '매거진 업로드',
    path: '/brand/upload',
    element: <MagazineUpload />,
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
