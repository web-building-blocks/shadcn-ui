import * as React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"

import DropdownMenuCheckboxes from "./dropdown-menu-checkboxes"
import DropdownMenuDemo from "./dropdown-menu-demo"
import DropdownMenuRadioGroupDemo from "./dropdown-menu-radio-group"
import DropdownMenuwithDividers from "./dropdown-menu-with-divider"
import DropdownMenuwithHeader from "./dropdown-menu-with-header"
import DropdownMenuwithIcon from "./dropdown-menu-with-icon"
import DropdownMenuSelect from "./dropdown-menu-with-search"

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenuDemo,
  argTypes: {
    // 全局禁用所有控件
    defaultOption1: { table: { disable: true } },
    defaultOption2: { table: { disable: true } },
    defaultOption3: { table: { disable: true } },
    defaultOption4: { table: { disable: true } },
    checkboxOption1: { table: { disable: true } },
    checkboxOption2: { table: { disable: true } },
    checkboxOption3: { table: { disable: true } },
    appearanceLabel: { table: { disable: true } },
    panelLabel: { table: { disable: true } },
    radioOption1: { table: { disable: true } },
    radioOption2: { table: { disable: true } },
    radioOption3: { table: { disable: true } },
    chineseCarsLabel: { table: { disable: true } },
    germanCarsLabel: { table: { disable: true } },
    dividerOption1: { table: { disable: true } },
    dividerOption2: { table: { disable: true } },
    dividerOption3: { table: { disable: true } },
    dividerOption4: { table: { disable: true } },
    searchOption1: { table: { disable: true } },
    searchOption2: { table: { disable: true } },
    searchOption3: { table: { disable: true } },
    searchOption4: { table: { disable: true } },
    headerLabel: { table: { disable: true } },
    userEmail: { table: { disable: true } },
    headerOption1: { table: { disable: true } },
    headerOption2: { table: { disable: true } },
    headerOption3: { table: { disable: true } },
    headerOption4: { table: { disable: true } },
  },
} as ComponentMeta<typeof DropdownMenuDemo>

// Default 变体
const DefaultTemplate: ComponentStory<typeof DropdownMenuDemo> = (args) => (
  <DropdownMenuDemo
    option1={args.defaultOption1}
    option2={args.defaultOption2}
    option3={args.defaultOption3}
    option4={args.defaultOption4}
  />
)

export const Default = DefaultTemplate.bind({})
Default.storyName = "Default"
Default.args = {
  defaultOption1: "Account Settings",
  defaultOption2: "Support",
  defaultOption3: "License",
  defaultOption4: "Signout",
}
Default.argTypes = {
  defaultOption1: { table: { disable: false } },
  defaultOption2: { table: { disable: false } },
  defaultOption3: { table: { disable: false } },
  defaultOption4: { table: { disable: false } },
}

// Checkboxes 变体
const CheckboxesTemplate: ComponentStory<typeof DropdownMenuCheckboxes> = (
  args
) => (
  <DropdownMenuCheckboxes
    appearanceLabel={args.appearanceLabel}
    option1={args.checkboxOption1}
    option2={args.checkboxOption2}
    option3={args.checkboxOption3}
  />
)

export const Checkboxes = CheckboxesTemplate.bind({})
Checkboxes.storyName = "Checkboxes"
Checkboxes.args = {
  appearanceLabel: "Appearance",
  checkboxOption1: "Status Bar",
  checkboxOption2: "Activity Bar",
  checkboxOption3: "Panel",
}
Checkboxes.argTypes = {
  appearanceLabel: { table: { disable: false } },
  checkboxOption1: { table: { disable: false } },
  checkboxOption2: { table: { disable: false } },
  checkboxOption3: { table: { disable: false } },
}

// Radio Group 变体
const RadioGroupTemplate: ComponentStory<typeof DropdownMenuRadioGroupDemo> = (
  args
) => (
  <DropdownMenuRadioGroupDemo
    panelLabel={args.panelLabel}
    option1={args.radioOption1}
    option2={args.radioOption2}
    option3={args.radioOption3}
  />
)

export const RadioGroup = RadioGroupTemplate.bind({})
RadioGroup.storyName = "Radio Group"
RadioGroup.args = {
  panelLabel: "Panel Position",
  radioOption1: "Top",
  radioOption2: "Bottom",
  radioOption3: "Right",
}
RadioGroup.argTypes = {
  panelLabel: { table: { disable: false } },
  radioOption1: { table: { disable: false } },
  radioOption2: { table: { disable: false } },
  radioOption3: { table: { disable: false } },
}

// With icons 变体
const WithIconsTemplate: ComponentStory<typeof DropdownMenuwithIcon> = () => (
  <DropdownMenuwithIcon />
)

export const WithIcons = WithIconsTemplate.bind({})
WithIcons.storyName = "With icons"

// With divider 变体
const DividerTemplate: ComponentStory<typeof DropdownMenuwithDividers> = (
  args
) => (
  <DropdownMenuwithDividers
    chineseCarsLabel={args.chineseCarsLabel}
    germanCarsLabel={args.germanCarsLabel}
    option1={args.dividerOption1}
    option2={args.dividerOption2}
    option3={args.dividerOption3}
    option4={args.dividerOption4}
  />
)

export const WithDivider = DividerTemplate.bind({})
WithDivider.storyName = "With divider"
WithDivider.args = {
  chineseCarsLabel: "Chinese Cars",
  germanCarsLabel: "German Cars",
  dividerOption1: "BYD",
  dividerOption2: "GWM",
  dividerOption3: "Mercedes",
  dividerOption4: "Audi",
}
WithDivider.argTypes = {
  chineseCarsLabel: { table: { disable: false } },
  germanCarsLabel: { table: { disable: false } },
  dividerOption1: { table: { disable: false } },
  dividerOption2: { table: { disable: false } },
  dividerOption3: { table: { disable: false } },
  dividerOption4: { table: { disable: false } },
}

// With search 变体
const WithSearchTemplate: ComponentStory<typeof DropdownMenuSelect> = (
  args
) => (
  <DropdownMenuSelect
    option1={args.searchOption1}
    option2={args.searchOption2}
    option3={args.searchOption3}
    option4={args.searchOption4}
  />
)

export const WithSearch = WithSearchTemplate.bind({})
WithSearch.storyName = "With search"
WithSearch.args = {
  searchOption1: "Account Settings",
  searchOption2: "Support",
  searchOption3: "License",
  searchOption4: "Signout",
}
WithSearch.argTypes = {
  searchOption1: { table: { disable: false } },
  searchOption2: { table: { disable: false } },
  searchOption3: { table: { disable: false } },
  searchOption4: { table: { disable: false } },
}

// With header 变体
const WithHeaderTemplate: ComponentStory<typeof DropdownMenuwithHeader> = (
  args
) => (
  <DropdownMenuwithHeader
    headerLabel={args.headerLabel}
    userEmail={args.userEmail}
    option1={args.headerOption1}
    option2={args.headerOption2}
    option3={args.headerOption3}
    option4={args.headerOption4}
  />
)

export const WithHeader = WithHeaderTemplate.bind({})
WithHeader.storyName = "With header"
WithHeader.args = {
  headerLabel: "Signed in as",
  userEmail: "nzha9876@uni.sydney.edu.au",
  headerOption1: "Account Settings",
  headerOption2: "Support",
  headerOption3: "License",
  headerOption4: "Signout",
}
WithHeader.argTypes = {
  headerLabel: { table: { disable: false } },
  userEmail: { table: { disable: false } },
  headerOption1: { table: { disable: false } },
  headerOption2: { table: { disable: false } },
  headerOption3: { table: { disable: false } },
  headerOption4: { table: { disable: false } },
}
