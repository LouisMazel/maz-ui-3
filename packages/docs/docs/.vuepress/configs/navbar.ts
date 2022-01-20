import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './../../../../lib/package.json'

export const navbar: NavbarConfig = [
  {
    text: 'Guide',
    children: [
      {
        text: 'Getting Started',
        link: '/guide/getting-started.md'
      },
      {
        text: 'Basic Colors',
        link: '/guide/colors.md'
      },
      {
        text: 'Theme',
        link: '/guide/theme.md'
      },
      {
        text: 'Dark Mode',
        link: '/guide/dark-mode.md'
      }
    ]
  },
  {
    text: 'Components',
    children: [
      {
        text: 'MazBtn',
        link: '/components/maz-btn.md'
      },
      {
        text: 'MazAvatar',
        link: '/components/maz-avatar.md'
      }
    ]
  },
  {
    text: `Made with Maz-UI`,
    link: '/made-with-maz-ui'
  },
  {
    text: `v${version}`,
    children: [
      {
        text: 'Changelog',
        link: 'https://github.com/vuepress/vuepress-next/blob/main/CHANGELOG.md',
      },
      {
        text: 'v2.x',
        link: 'https://louismazel.github.io/maz-ui',
      },
    ],
  },
]