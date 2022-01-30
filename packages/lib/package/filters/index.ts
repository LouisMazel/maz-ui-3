import { Plugin } from 'vue'

import { capitalize } from './capitalize'
import { currency } from './currency'
import { date } from './date'
import { number } from './number'

const filters = {
  capitalize,
  currency,
  date,
  number,
}

export type Filters = typeof filters

const installFilters: Plugin = {
  install(app) {
    app.provide('filters', filters)
  },
}

export { capitalize, currency, date, number, installFilters }
