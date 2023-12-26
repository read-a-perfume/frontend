import PerfumeCard from "@pages/brand/perfume-card";
import type {Meta, StoryObj} from '@storybook/react'

const meta: Meta<typeof PerfumeCard> = {
    component: PerfumeCard,
    title: 'Brandpage/perfume-card',
  }
  
  export default meta

  type Story = StoryObj<typeof PerfumeCard>

  export const Example: Story = {
    args: {
      data: {
        thumbnail:'',
        name:'퍼퓸 카모',
        brandName:'탬버린즈',
        strength:'적당한 향',
        duration:'3시간~6시간',
        id:0,
      },
    },
  }