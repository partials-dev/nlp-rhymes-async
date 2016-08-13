const nlp = require('nlp_compromise')
const rhymes = require('./lib/nlp-rhymes-async.min')
nlp.plugin(rhymes)

nlp.term('bug').rhymesAsync(r => {
  debugger
})
