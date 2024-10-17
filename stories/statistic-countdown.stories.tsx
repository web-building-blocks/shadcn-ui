import type { Meta, StoryObj } from "@storybook/react";
import CountdownStatistic from "@/registry/default/example/statistic-countdown";
const countdownMeta: Meta<typeof CountdownStatistic> = {
  title: "Components/Statistic/Countdown",
  component: CountdownStatistic,
  argTypes: {
    countdownTime: {
      control: { type: "number", min: 0, max: 100000, step: 1000 },
      description: "Set the countdown time in milliseconds",
    },
    dayLevel: {
      control: "boolean",
      description: "Enable or disable day-level countdown",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This component displays a countdown timer with options for day-level precision.",
      },
    },
  },
};
export default countdownMeta;
type Story = StoryObj<typeof countdownMeta>;
export const CountdownStatisticStory: Story = {
  args: {
    countdownTime: 86400000, // 1 day in milliseconds
    dayLevel: true,
  },
};
