import Magazine from '@pages/brand/magazine'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Magazine> = {
  component: Magazine,
  title: 'Brandpage/magazine',
}

export default meta

type Story = StoryObj<typeof Magazine>

export const Example: Story = {
  args: {
    data: {
      title: '안녕하세요',
      content: '안녕',
      thumbnail: '',
      coverThumbnail: '',
      tags: ['foo', 'bar'],
    },
  },
}
