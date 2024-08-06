import Filter from 'bad-words'

import { portugueseBadWords } from './portugueseBadWords'

const filter = new Filter()

filter.addWords(...portugueseBadWords)

export { filter }
