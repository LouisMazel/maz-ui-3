import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './../../../../lib/package.json'

export const navbar: NavbarConfig = [
  {
    text: 'Guide',
    children: [
      {
        text: 'Getting Started',
        link: '/guide/getting-started.md'
      }
    ]
  },
  {
    text: 'Components',
    children: [
      {
        text: 'MazBtn',
        link: '/components/maz-btn.md'
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