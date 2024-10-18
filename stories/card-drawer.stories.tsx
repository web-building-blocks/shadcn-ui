import type { Meta, StoryObj } from '@storybook/react';
import CardWithDrawer from './card-with-drawer';

const meta: Meta<typeof CardWithDrawer> = {
  title: 'Components/CardWithDrawer',
  component: CardWithDrawer,
  argTypes: {
    imageUrl: {
      control: { type: 'select' },
      description: 'Image URL for the card',
      options: [
        'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg',
        'https://newsroom.unsw.edu.au/sites/default/files/styles/full_width__2x/public/thumbnails/image/2022-11-02-students-library-lawn-0002_2.jpg',
        'https://p5.itc.cn/q_70/images01/20210704/79c80488351d42aa88df59a6b0510b01.jpeg',
      ],
    },
    cardTitle: {
      control: { type: 'select' },
      description: 'Title text displayed on the card',
      options: ['University of Sydney', 'University of New South Wales', 'Guangdong University of technology'],
    },
    userName: {
      control: { type: 'select' },
      description: 'Name of the user displayed on the card',
      options: ['Mariana', 'John Doe', 'Jane Smith'],
    },
    buttonText: {
      control: { type: 'select' },
      description: 'Text displayed on the button',
      options: ['Explore More', 'Learn More', 'Contact Us'],
    },
    buttonLink: {
      control: { type: 'select' },
      description: 'Link the button navigates to',
      options: [
        'https://www.sydney.edu.au/',
        'https://www.unsw.edu.au/',
        'https://www.gdut.edu.cn/',
      ],
    },
    width: {
      control: { type: 'select' },
      options: ['w-1/4', 'w-1/3', 'w-1/2', 'w-full'],
      description: 'Set the width of the card using TailwindCSS classes',
    },
    height: {
      control: { type: 'select' },
      options: ['h-32', 'h-48', 'h-64', 'h-80'],
      description: 'Set the height of the card using TailwindCSS classes',
    },
  },
  args: {
    imageUrl: 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg',
    cardTitle: 'University of Sydney',
    userName: 'Mariana',
    buttonText: 'Explore More',
    buttonLink: 'https://www.sydney.edu.au/',
    width: 'w-1/2',
    height: 'h-64',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    imageUrl: 'https://www.woodsbagot.com/wp-content/uploads/legacy/93/0-2048x1739.jpg',
    cardTitle: 'University of Sydney',
    userName: 'Mariana',
    buttonText: 'Explore More',
    buttonLink: 'https://www.sydney.edu.au/',
    width: 'w-1/2',
    height: 'h-64',
  }
};

// Story with smaller size
export const SmallCard: Story = {
  args: {
    width: 'w-1/4',
    height: 'h-48',
  },
};

// Story with custom user and title
export const CustomCard: Story = {
  args: {
    cardTitle: 'Custom Title',
    userName: 'John Doe',
    buttonText: 'Learn More',
    buttonLink: 'https://www.sydney.edu.au/',
  },
};
