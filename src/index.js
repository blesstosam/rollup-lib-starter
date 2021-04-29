import { sum } from './math'
import _arrayEach from 'lodash/_arrayEach'

const subs = [].filter(i => i === 1)
console.log(sum(1, 2))

// 怎么不把 Promise 打进去
const p = window.Promise

export { sum, subs, p, _arrayEach }
