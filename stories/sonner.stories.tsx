import { Meta, StoryObj } from "@storybook/react";
import { ToasterDemo } from "./sonner-index";

const meta: Meta<typeof ToasterDemo> = {
  title: "Components/Sonner",
  component: ToasterDemo,
  argTypes: {
    theme: {
      control: "select",
      options: ["light", "dark", "system"],
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "light" },
      },
      description: "Theme of the toast notification.",
    },
    duration: {
      control: "number",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 3000 },
      },
      description: "Duration of the toast in milliseconds.",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "Toaster component that supports custom themes, durations, and positions.",
      },
    },
  },
};

export default meta;

type Story = StoryObj<typeof ToasterDemo>;

export const Default: Story = { args: { theme: "light" } };
export const DarkTheme: Story = { args: { theme: "dark" } };
export const CustomDuration: Story = { args: { theme: "light", duration: 5000 } };
