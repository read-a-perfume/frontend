import {createBrowserRouter} from 'react-router-dom'
import SignUp from '@pages/sign-up'
import {Router as RemixRouter} from '@remix-run/router/dist/router'
import SignInForm from '@pages/sign-in/sign-in-form'
import Home from '@pages/home'
import EditOptions from '@layouts/edit-options'
import Brand from '@pages/brand'
import GeneralLayout from '@layouts/general-layout'
import Perfumes from '@pages/perfumes'
import MyPage from '@pages/my-page/index'

interface RouterBase {
  id: number // 페이지 아이디 (반복문용 고유값)
  path: string // 페이지 경로
  label: string // 사이드바에 표시할 페이지 이름
  element: React.ReactNode // 페이지 엘리먼트
}

interface UserAccessibleRouterElement extends RouterBase {
  withAuth?: boolean // 인증이 필요한 페이지 여부
}

type RouterElement = UserAccessibleRouterElement

const routerData: RouterElement[] = [
  {
    id: 0,
    label: '메인 페이지',
    path: '/',
    element: <Home />,
  },
  {
    id: 1,
    label: '로그인 페이지',
    path: '/sign-in',
    element: <SignInForm />,
  },
  {
    id: 3,
    label: '회원가입 페이지',
    path: '/sign-up',
    element: <SignUp />,
  },
  {
    id: 3,
    label: '브랜드',
    path: '/brand',
    element: <Brand />,
  },
  {
    id: 4,
    label: '제품리스트 페이지',
    path: '/perfumes',
    element: <Perfumes />,
  },
  {
    id: 5,
    label: '테스트',
    path: '/test',
    element: <EditOptions />,
  },
  {
    id: 6,
    label: '마이페이지',
    path: '/mypage',
    element: <MyPage />,
  },
  //   {
  //     label: "test",
  //     key: "test-key",
  //     route: "/test",
  //     component: <Test />,
  //   },
  // {
  //   type: 'collapse',
  //   label: 'test',
  //   key: 'test-key',
  //   collapse: [
  //     {
  //       label: 'test-first',
  //       key: 'test-first-key',
  //       route: '/test-first',
  //       component: <TestFirst />,
  //     },
  //   ],
  // },
  //   {
  //     label: "brand",
  //     key: "brand-key",
  //     route: "/brand/:id",
  //     component: <Brand />,
  //   },
  //   {
  //     label: "brand-settings",
  //     key: "brand-settings-key",
  //     route: "/brand/:id/settings",
  //     component: <BrandSettings />,
  //   },
  //   {
  //     label: "magazine-detail",
  //     key: "magazine-detail-key",
  //     route: "/brand/:id/magazine/:id",
  //     component: <MagazineContent />,
  //   },
  //   {
  //     label: "post-magazine",
  //     key: "post-magazine-key",
  //     route: "/brand/:id/magazine/post",
  //     component: <PostMagazine />,
  //   },
  //   {
  //     label: "settings",
  //     key: "settings-key",
  //     route: "/:id/settings",
  //     component: <AccountLayout />,
  //   },
]

export const router: RemixRouter = createBrowserRouter(
  routerData.map(router => {
    return {
      path: router.path,
      element: <GeneralLayout>{router.element}</GeneralLayout>,
    }
  }),
)
