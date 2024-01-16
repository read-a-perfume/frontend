import {lazy} from 'react'

export const LazySignUpPage = lazy(() => import('@pages/sign-up'))
export const LazySignInPage = lazy(() => import('@pages/sign-in'))

export const LazyReviewListPage = lazy(
  () => import('@pages/reviews/review-list'),
)
export const LazyReviewWriterPage = lazy(
  () => import('@pages/reviews/review-writer'),
)
export const LazyPerfumesPage = lazy(() => import('@pages/perfumes/index'))
export const LazyPerfumeDetailsPage = lazy(
  () => import('@pages/perfume-detail'),
)
export const LazyBrandDetailsPage = lazy(
  () => import('@pages/brand/brand-page'),
)
export const LazyBrandsPage = lazy(() => import('@pages/brand/brand-list'))
export const LazyMyPage = lazy(() => import('@pages/my-page'))
export const LazyAccountPage = lazy(() => import('@pages/account'))
