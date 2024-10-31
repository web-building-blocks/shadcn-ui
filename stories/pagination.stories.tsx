import { ComponentStory, ComponentMeta } from '@storybook/react';
import PaginationDemo from './pagination-demo';

export default {
  title: 'Components/Pagination',
  component: PaginationDemo,
  argTypes: {
    totalPages: {
      control: { type: 'number' },
      defaultValue: 10,
    },
    border: {
      control: { type: 'text' },
      defaultValue: '1px solid hsl(var(--border))',
    },
    borderRadius: {
      control: { type: 'text' },
      defaultValue: '4px',
    },
    padding: {
      control: { type: 'text' },
      defaultValue: '8px 12px',
    },
    cursor: {
      control: { type: 'text' },
      defaultValue: 'pointer',
    },
    textDecoration: {
      control: { type: 'text' },
      defaultValue: 'none',
    },
    backgroundColor: {
      control: { type: 'select' },
      options: [
        'hsl(var(--background))',
        'hsl(var(--foreground))',
        'hsl(var(--primary))',
        'hsl(var(--primary-foreground))',
        'hsl(var(--secondary))',
        'hsl(var(--secondary-foreground))',
      ],
      defaultValue: 'hsl(var(--background))',
    },
    color: {
      control: { type: 'select' },
      options: [
        'hsl(var(--background))',
        'hsl(var(--foreground))',
        'hsl(var(--primary))',
        'hsl(var(--primary-foreground))',
        'hsl(var(--secondary))',
        'hsl(var(--secondary-foreground))',
      ],
      defaultValue: 'hsl(var(--foreground))',
    },
    activeBackgroundColor: {
      control: { type: 'select' },
      options: [
        'hsl(var(--background))',
        'hsl(var(--foreground))',
        'hsl(var(--primary))',
        'hsl(var(--primary-foreground))',
        'hsl(var(--secondary))',
        'hsl(var(--secondary-foreground))',
      ],
      defaultValue: 'hsl(var(--primary))',
    },
    activeColor: {
      control: { type: 'select' },
      options: [
        'hsl(var(--background))',
        'hsl(var(--foreground))',
        'hsl(var(--primary))',
        'hsl(var(--primary-foreground))',
        'hsl(var(--secondary))',
        'hsl(var(--secondary-foreground))',
      ],
      defaultValue: 'hsl(var(--primary-foreground))',
    },
    activeBorderColor: {
      control: { type: 'select' },
      options: [
        'hsl(var(--primary))',
        'hsl(var(--secondary))',
        'hsl(var(--foreground))',
      ],
      defaultValue: 'hsl(var(--primary))',
    },
  },
} as ComponentMeta<typeof PaginationDemo>;

const Template: ComponentStory<typeof PaginationDemo> = (args) => (
  <PaginationDemo {...args} />
);

export const Default = Template.bind({});
Default.args = {
  totalPages: 10,
  border: '1px solid hsl(var(--border))',
  borderRadius: '4px',
  padding: '8px 12px',
  cursor: 'pointer',
  textDecoration: 'none',
  backgroundColor: 'hsl(var(--background))',
  color: 'hsl(var(--foreground))',
  activeBackgroundColor: 'hsl(var(--primary))',
  activeColor: 'hsl(var(--primary-foreground))',
  activeBorderColor: 'hsl(var(--primary))',
};
