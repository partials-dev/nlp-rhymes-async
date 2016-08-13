# nlp-syllables-async
A [plugin](https://github.com/nlp-compromise/nlp_compromise/wiki/Plugins) for [nlp_compromise](https://github.com/nlp-compromise/nlp_compromise) that retrieves rhymes for a word.

# Features
- Asynchronous: pulls high quality syllable data from the network.
- Cached: avoids making duplicate network requests.
- Promise-based: more fun.

# Installation and Usage

Install with `$ npm install nlp-rhymes-async`

then

```javascript
import nlp from 'nlp_compromise'
import rhymes from 'nlp-rhymes-async'
nlp.plugin(rhymes)

nlp.text('simple is different from easy').rhymes().then(terms => {
  const allRhymes = terms.map(t => t.rhymes)
  console.log(JSON.stringify(allRhymes))
  // output:
  // [
  //  ['sim', 'ple'],
  //  ['is'],
  //  ['dif', 'fer', 'ent'],
  //  ['from'],
  //  ['eas', 'y']
  // ]
})

nlp.term('remain').rhymesAsync().then(rhymes => {
  console.log(rhymes)
  // output:
  // [
  //  'in',
  //  'de',
  //  'ter',
  //  'mi',
  //  'na',
  //  'cy'
  // ]
})
```
