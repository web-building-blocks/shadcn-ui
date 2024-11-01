import type { Meta, StoryObj } from '@storybook/react';
import CardWithDrawer from './card-with-drawer';
import CardDemo from './card-demo';
import CardDynamic from './card-dynamic';
import CardImage from './card-image';
import CardLargeHeader from './card-large-header';
import CardNormal from './card-normal';
import CardWithAction from './card-with-action';
import CardWithForm from './card-with-form';

const meta: Meta = {
  title: 'Components/CardVariants',
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
      control: { type: 'text' },
      description: 'Title text displayed on the card',
    },
    userName: {
      control: { type: 'text' },
      description: 'Name of the user displayed on the card',
    },
    buttonText: {
      control: { type: 'text' },
      description: 'Text displayed on the button',
    },
    buttonLink: {
      control: { type: 'text' },
      description: 'Link the button navigates to',
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

// CardWithDrawer Story
export const CardWithDrawerDefault: Story = {
  render: (args) => <CardWithDrawer {...args} />,
  args: {
    cardTitle: 'University of Sydney',
    buttonText: 'Explore More',
  },
};

// CardDemo Story
export const CardDemoStory: Story = {
  render: (args) => <CardDemo {...args} />,
  args: {
    cardTitle: 'Dynamic Card',
    userName: 'User A',
  },
};

// CardDynamic Story
export const CardDynamicStory: Story = {
  render: (args) => <CardDynamic {...args} />,
  args: {
    cardTitle: 'Live Data Card',
    buttonText: 'Check Stats',
  },
};

// CardImage Story
export const CardImageStory: Story = {
  render: (args) => <CardImage {...args} />,
  args: {
    imageUrl: 'https://p5.itc.cn/q_70/images01/20210704/79c80488351d42aa88df59a6b0510b01.jpeg',
    cardTitle: 'Scenic View',
  },
};

// CardLargeHeader Story
export const CardLargeHeaderStory: Story = {
  render: (args) => <CardLargeHeader {...args} />,
  args: {
    cardTitle: 'Header Card',
    buttonText: 'Get Started',
  },
};

// CardNormal Story
export const CardNormalStory: Story = {
  render: (args) => <CardNormal {...args} />,
  args: {
    cardTitle: 'Regular Card',
    buttonText: 'Learn More',
  },
};

// CardWithAction Story
export const CardWithActionStory: Story = {
  render: (args) => <CardWithAction {...args} />,
  args: {
    cardTitle: 'Actionable Card',
    buttonText: 'Proceed',
  },
};

// CardWithForm Story
export const CardWithFormStory: Story = {
  render: (args) => <CardWithForm {...args} />,
  args: {
    cardTitle: 'Form Card',
    buttonText: 'Submit',
  },
};
