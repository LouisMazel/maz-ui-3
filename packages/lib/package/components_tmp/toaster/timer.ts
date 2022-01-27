export class Timer {
  callback: Function
  delay: number
  timer: number
  startedAt: number

  constructor(callback: Function, delay: number) {
    this.startedAt = Date.now()
    this.callback = callback
    this.delay = delay
    this.start()
  }

  pause() {
    this.stop()
    this.delay -= Date.now() - this.startedAt
  }

  resume() {
    this.startedAt = Date.now()
    this.start()
  }

  start() {
    this.timer = setTimeout(this.callback, this.delay)
  }

  stop() {
    clearTimeout(this.timer)
  }
}
