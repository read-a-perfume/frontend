import ReviewCard from '@components/reviews/review-card'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof ReviewCard> = {
  component: ReviewCard,
  title: 'Components/reviews/ReviewCard',
}

export default meta
type Story = StoryObj<typeof ReviewCard>

export const Default: Story = {
  args: {
    author: {
      username: '어드민',
      id: 0,
      thumbnail: '',
    },
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commentCount: 146,
    thumbnails: [],
  },
}

export const One: Story = {
  args: {
    author: {
      username: '어드민',
      id: 0,
      thumbnail: '',
    },
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commentCount: 146,
    thumbnails: ['https://picsum.photos/200/300/?blur'],
  },
}

export const Two: Story = {
  args: {
    author: {
      username: '어드민',
      id: 0,
      thumbnail: '',
    },
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commentCount: 146,
    thumbnails: [
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
    ],
  },
}

export const Three: Story = {
  args: {
    author: {
      username: '어드민',
      id: 0,
      thumbnail: '',
    },
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commentCount: 146,
    thumbnails: [
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
    ],
  },
}
