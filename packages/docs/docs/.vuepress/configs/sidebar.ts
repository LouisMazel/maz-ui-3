import type { SidebarConfig } from '@vuepress/theme-default'
import { components } from './components'

export const sidebar: SidebarConfig = [
  {
    text: 'Guide',
    children: [
      '/guide/getting-started.md',
      '/guide/colors.md',
      '/guide/theme.md',
      '/guide/dark-mode.md',
    ],
  },
  components,
]