import React from "react"
import { Meta, Story } from "@storybook/react"

import { CardsCalendar } from "./calendar"

export default {
  title: "Components/CardsCalendar",
  component: CardsCalendar,
} as Meta

const Template: Story = (args) => <CardsCalendar {...args} />

export const Default = Template.bind({})
Default.args = {}
