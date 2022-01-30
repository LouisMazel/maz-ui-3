import { App } from 'vue'

import { capitalize } from './capitalize'
import { currency } from './currency'
import { date } from './date'
import { number } from './number'
import { telephone } from './telephone'

const filters = {
  capitalize,
  currency,
  date,
  number,
  telephone,
}

export type Filters = typeof filters

const installFilters = {
  install(app: App) {
    app.provide('filters', filters)
  },
}

export { capitalize, currency, date, number, telephone, installFilters }
