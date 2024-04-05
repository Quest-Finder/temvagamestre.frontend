import Filter from 'bad-words'
import { portugueseBadWords } from './badWords'

const filter = new Filter()

filter.addWords(...portugueseBadWords)

export { filter }
