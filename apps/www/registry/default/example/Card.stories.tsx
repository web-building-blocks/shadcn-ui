// src/stories/Card.stories.tsx
import React from "react"

import CardDemo from "@/registry/default/example/card-demo"
import CardDynamic from "@/registry/default/example/card-dynamic"
import CardImage from "@/registry/default/example/card-image"
import CardLargeHeader from "@/registry/default/example/card-large-header"
import CardNormal from "@/registry/default/example/card-normal"
import CardWithActionComponent from "@/registry/default/example/card-with-action"
import CardWithDrawerComponent from "@/registry/default/example/card-with-drawer"
import CardWithForm from "@/registry/default/example/card-with-form"

// Default export defining the component's title in the Storybook UI and component
export default {
  title: "Card Components",
  component: CardDemo,
}

// Individual Stories
export const Default = () => <CardDemo />

export const DynamicCard = () => <CardDynamic />

export const CardWithImage = () => <CardImage />

export const CardWithLargeHeader = () => <CardLargeHeader />

export const NormalCard = () => <CardNormal />

export const CardWithAction = () => <CardWithActionComponent />

export const DrawerCard = () => <CardWithDrawerComponent />

export const CardWithFormStory = () => <CardWithForm />
