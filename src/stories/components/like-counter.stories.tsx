import {useArgs} from '@storybook/preview-api'
import type {Meta, StoryObj} from '@storybook/react'
import {withActions} from '@storybook/addon-actions/decorator'
import LikeCounter from '@components/reviews/like-counter'

const meta: Meta<typeof LikeCounter> = {
  component: LikeCounter,
  title: 'Components/Reviews/LikeCounter',

  parameters: {
    actions: {
      handles: ['click'],
    },
  },
  decorators: [withActions],
}

export default meta

type Story = StoryObj<typeof LikeCounter>

export const Example: Story = {
  args: {
    likeNumber: 250,
  },

  render: function Render(args) {
    const [{isActive = false}, setIsActvie] = useArgs()

    function handleActive() {
      setIsActvie({isActive: true})
    }
    function handleInActive() {
      setIsActvie({isActive: false})
    }

    return (
      <LikeCounter
        {...args}
        isActive={isActive}
        handleAcitve={handleActive}
        handleInAcitve={handleInActive}
      />
    )
  },
}
