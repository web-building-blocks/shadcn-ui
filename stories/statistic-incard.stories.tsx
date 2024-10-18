import type { Meta, StoryObj } from "@storybook/react";
import IncardStatistic from "@/registry/default/example/statistic-incard";
const incardMeta: Meta<typeof IncardStatistic> = {
  title: "Components/Statistic/Incard",
  component: IncardStatistic,
  argTypes: {
    activeValue: {
      control: { type: "number", min: 0, max: 100, step: 0.01 },
      description: "Set the percentage value for active statistic",
    },
    idleValue: {
      control: { type: "number", min: 0, max: 100, step: 0.01 },
      description: "Set the percentage value for idle statistic",
    },
    activeColor: {
      control: "color",
      description: "Set the color for the active statistic",
    },
    idleColor: {
      control: "color",
      description: "Set the color for the idle statistic",
    },
  },
  parameters: {
    docs: {
      description: {
        component: "This component displays Active and Idle statistics within a card.",
      },
    },
  },
};
export default incardMeta;
type Story = StoryObj<typeof incardMeta>;
export const IncardStatisticStory: Story = {
  args: {
    activeValue: 11.28,
    idleValue: 9.3,
    activeColor: "#347300",
    idleColor: "#a10f00",
  },
};
