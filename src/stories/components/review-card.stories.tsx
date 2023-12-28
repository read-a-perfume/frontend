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
    username: '어드민',
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commnents: 146,
    thumbnails: [],
  },
}

export const One: Story = {
  args: {
    username: '어드민',
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commnents: 146,
    thumbnails: ['https://picsum.photos/200/300/?blur'],
  },
}

export const Two: Story = {
  args: {
    username: '어드민',
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commnents: 146,
    thumbnails: [
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
    ],
  },
}

export const Three: Story = {
  args: {
    username: '어드민',
    shortReview: '한줄 평',
    keywords: ['안녕'],
    commnents: 146,
    thumbnails: [
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
      'https://picsum.photos/200/300/?blur',
    ],
  },
}
