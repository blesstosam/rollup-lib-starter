import { sum } from './math'

const subs = [].filter(i => i === 1)
console.log(sum(1, 2))

const p = window.Promise

export { sum, subs, p }
