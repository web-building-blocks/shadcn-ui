import type { Meta, StoryObj } from '@storybook/react';
import CarouselDemo from './carousel-demo';

const meta: Meta<typeof CarouselDemo> = {
  title: 'Components/CarouselDemo',
  component: CarouselDemo,
  argTypes: {
    items: {
      table: { disable: true },  // 隐藏 items 控件
    },
    width: {
      control: { type: 'select' },
      options: ['w-full', 'w-1/2', 'w-1/3', 'w-1/4'],
      description: 'Set the width of the carousel using TailwindCSS classes',
    },
    height: {
      control: { type: 'select' },
      options: ['max-w-xs', 'max-w-sm', 'max-w-md', 'max-w-lg'],
      description: 'Set the height of the carousel using TailwindCSS classes',
    },
    cardClass: {
      control: 'text',
      description: 'Custom class for the cards displayed inside the carousel',
    },
    itemCount: {
      control: 'number',
      description: 'Number of items in the carousel',
    },
    textColor: {
      control: { type: 'select' },
      options: ['text-black', 'text-white', 'text-red-600', 'text-blue-600', 'text-green-600'],
      description: 'Set the text color using TailwindCSS classes',
    },
  },
  args: {
    items: Array.from({ length: 5 }, (_, i) => <span className="text-4xl font-semibold">{i + 1}</span>),
    width: 'w-full',
    height: 'max-w-xs',
    cardClass: 'flex aspect-square items-center justify-center p-6',
    itemCount: 5,
    textColor: 'text-black',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    items: Array.from({ length: 5 }, (_, i) => <span className="text-4xl font-semibold">{i + 1}</span>),
    width: 'w-full',
    height: 'max-w-xs',
    cardClass: 'flex aspect-square items-center justify-center p-6',
    itemCount: 5,
    textColor: 'text-black',
  },
};

// Story with red text color
export const RedTextCarousel: Story = {
  args: {
    textColor: 'text-red-600',
  },
};

// Story with green text color and 10 items
export const GreenTextLargeCarousel: Story = {
  args: {
    textColor: 'text-green-600',
    itemCount: 10,
    items: Array.from({ length: 10 }, (_, i) => <span className="text-4xl font-semibold">{i + 1}</span>),
  },
};
