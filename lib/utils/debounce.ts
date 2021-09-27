export const debounce = <F extends (...params: any[]) => void>(fn: F, delay: number): F => {
  let timeoutID: NodeJS.Timeout
  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => fn.apply(this, args), delay)
  } as F
}
