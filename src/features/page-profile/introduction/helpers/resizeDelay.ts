export const resizeDelay = (func: () => void, milliseconds?: number) => {
  const time = milliseconds || 400
  let timer: number

  return (event: Event): void => {
    if (timer) {
      clearTimeout(timer)
    }

    timer = setTimeout(func, time, event)
  }
}
