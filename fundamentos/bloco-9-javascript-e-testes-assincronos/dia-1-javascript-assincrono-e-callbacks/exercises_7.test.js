const uppercase = require('./exercises_7')

describe('uppercase', () => {
    it('should return UPPERCASE string', done => {
        uppercase('javascript', (str) => {
        expect(str).toBe('JAVASCRIPT')
        done()
        })
    })
})