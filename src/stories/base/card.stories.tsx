import MagazineCard from '@components/magazine/magazine-card'
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof MagazineCard> = {
  component: MagazineCard,
  title: 'Base/MagazineCard',
}

export default meta

type Story = StoryObj<typeof MagazineCard>

MagazineCard.defaultProps = {
  title: 'title',
  content: 'content',
  hashTags: ['foo', 'bar'],
  coverImage: '/images/perfume.png',
  profileImage: '/images/perfume.png',
}

export const Normal: Story = {}

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
