import type { Meta, StoryObj } from '@storybook/react';
import Tags from './tags';

const meta: Meta<typeof Tags> = {
  title: 'Components/Tags',
  component: Tags,
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['default', 'secondary', 'destructive', 'outline'],
      description: 'Set the style variant of the tag',
    },
  },
  args: {
    variant: 'default',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    variant: 'default',
  },
};

export const CustomTags: Story = {
  args: {
    variant: 'destructive',
  },
};
