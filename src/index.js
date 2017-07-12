const nap = function nap (ms = 1000) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export default nap
