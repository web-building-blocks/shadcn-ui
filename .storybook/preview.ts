import type { Preview } from "@storybook/react"
import '../apps/www/styles/globals.css';  
import '../apps/www/styles//tailwind.css';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
}

export default preview
