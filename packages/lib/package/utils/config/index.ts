import { App as Application } from 'vue'

const config = {}

export let VueInstance: Application

export { config as default }

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const setVueInstance = (instance: Application): Application<any> => {
  return (VueInstance = instance)
}
