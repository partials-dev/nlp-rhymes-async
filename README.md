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

nlp.term('simple').getRhymesAsync().then(rhymes => {
  console.log(JSON.stringify(rhymes))
  // output:
  // [
  //  {"word": "civil", "numSyllables": 2},
  //  {"word": "fickle", "numSyllables": 2},
  //  {"word":"kindle", "numSyllables": 2},
  //  etc...
  // ]
})
```
