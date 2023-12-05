import Card from '@components/base/card'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof Card> = {
  component: Card,
  title: 'Base/Card',
}

export default meta

type Story = StoryObj<typeof Card>

Card.defaultProps = {
  title: 'title',
  content: 'content',
  hashTags: ['foo', 'bar'],
  coverImage: '/images/perfume.png',
  profileImage: '/images/perfume.png',
}

export const Normal: Story = {
    
}

export const Editor: Story = {
  args: {
    isEditor: true,
  },
}

export const OptionOpen: Story = {
  args: {
    isOptionOpen: true,
  },
}
