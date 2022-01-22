import type { NavbarConfig } from '@vuepress/theme-default'
import { version } from './../../../../lib/package.json'
import { components } from './components'

export const navbar: NavbarConfig = [
  {
    text: 'Guide',
    children: [
      '/guide/getting-started.md',
      '/guide/colors.md',
      '/guide/theme.md',
      '/guide/dark-mode.md'
    ]
  },
  components,
  '/made-with-maz-ui',
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