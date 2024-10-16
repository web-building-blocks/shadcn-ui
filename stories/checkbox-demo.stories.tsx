import type { Meta, StoryObj } from '@storybook/react';
import CheckboxDemo from './checkbox-demo';

// 预定义的复选框数组
const checkboxOptions = {
  default: [
    { id: 'default-1', label: 'Default checkbox' },
    { id: 'default-2', label: 'Checked State' }
  ],
  custom1: [
    { id: 'custom-1', label: 'Custom checkbox 1' },
    { id: 'custom-2', label: 'Custom checkbox 2' }
  ],
  custom2: [
    { id: 'another-1', label: 'Another checkbox 1' },
    { id: 'another-2', label: 'Another checkbox 2' }
  ],
};

const meta: Meta<typeof CheckboxDemo> = {
  title: 'Components/CheckboxDemo',
  component: CheckboxDemo,
  argTypes: {
    checkboxes: {
      control: { type: 'select' },
      options: ['Default', 'Custom Set 1', 'Custom Set 2'], // 使用标签作为选项
      mapping: {
        Default: checkboxOptions.default,
        'Custom Set 1': checkboxOptions.custom1,
        'Custom Set 2': checkboxOptions.custom2,
      },
      description: 'Array of checkboxes with id and label',
    },
    toastMessage: {
      control: 'text',
      description: 'Custom toast message to show when a checkbox is clicked',
    },
    layout: {
      control: { type: 'select' },
      options: ['vertical', 'horizontal'],
      description: 'Set the layout for the checkboxes (vertical or horizontal)',
    },
  },
  args: {
    checkboxes: checkboxOptions.default,
    toastMessage: 'Checkbox Clicked',
    layout: 'vertical',
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

// Default Story
export const Default: Story = {
  args: {
    checkboxes: checkboxOptions.default,
    toastMessage: 'Checkbox Clicked',
    layout: 'vertical',
  }
};

// Story with custom checkboxes and horizontal layout
export const CustomCheckboxes: Story = {
  args: {
    checkboxes: checkboxOptions.custom1,
    layout: 'horizontal',
  },
};

// Story with different toast message
export const CustomToastMessage: Story = {
  args: {
    toastMessage: 'Custom Toast Message',
  },
};
