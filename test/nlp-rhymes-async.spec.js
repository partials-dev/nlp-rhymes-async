/* global describe, before, it */

import chai from 'chai'

import nlp from 'nlp_compromise'
import nlpRhymes from '../lib/nlp-rhymes-async'

const expect = chai.expect
before('set up plugin', done => {
  nlp.plugin(nlpRhymes)
  nlp.syllables.setTimeout(500)
  done()
})

describe('Term', function () {
  var term
  before('instantiate term', done => {
    term = nlp.term('rhyme')
    done()
  })

  describe('#getRhymesAsync', function () {
    var getRhymes
    var rhymes
    before('get rhymes', function (done) {
      getRhymes = term.getRhymesAsync().then(result => {
        rhymes = result
        console.log('got rhymes')
        done()
      })
    })

    it('should return a promise', function () {
      expect(getRhymes.then).to.exist
    })
    it('should resolve to an array', function () {
      expect(rhymes).to.be.an.instanceof(Array)
    })
    it('should resolve to an array of objects', function () {
      rhymes.forEach(r => expect(r).to.be.an.instanceof(Object))
    })
  })
})
