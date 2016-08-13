import scrape from 'scrape-url'
import nlp from 'nlp_compromise'
import nlpSyllables from 'nlp-syllables-async'
nlp.plugin(nlpSyllables)
nlp.syllables.clearCache()

const api = {
  getRhymes (word) {
    return new Promise((resolve, reject) => {
      scrape(`http://www.b-rhymes.com/rhyme/word/${word}`, '.rhyme-table .word', (err, elts) => {
        if (err) {
          reject(err)
        } else {
          const words = elts.map((elt) => elt.text().trim())
          this.enrich(words).then(rhymeDescriptions => {
            resolve(rhymeDescriptions)
          })
        }
      })
    })
  },

  enrich (words) {
    const syllablePromises = words.map(word => nlp.termWithSyllables(word))
    return Promise.all(syllablePromises)
  }
}

export default api
