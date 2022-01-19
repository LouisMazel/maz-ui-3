import type { SidebarConfig } from '@vuepress/theme-default'

export const sidebar: SidebarConfig = {
  '/guide/': [
    {
      text: 'Guide',
      children: [
        '/guide/getting-started.md',
        '/guide/colors.md',
        '/guide/theme.md',
        '/guide/dark-mode.md',
      ],
    },
  ],
  '/components/': [
    {
      text: 'Components',
      children: [
        '/components/maz-btn.md',
        '/components/maz-avatar.md',
        '/components/maz-lazy-img.md',
      ],
    },
  ],
}