const { expect } = require('chai');
const positiveOrNegative = require('./positiveOrNegative');


describe('positiveOrNegative', () => {
    describe('Quando o numero passado for maior que 0', () => {
        it('Deve retornar "positive"', () => {
            expect(positiveOrNegative(1)).to.be.equals('positive');
        })
    })

    describe('Quando o numero passado for menor que 0', () => {
        it('Deve retornar "negative"', () => {
            expect(positiveOrNegative(-4)).to.be.equals('negative');
        })
    })

    describe('Quando o numero passado for igual a 0', () => {
        it('Deve retornar "neutro"', () => {
            expect(positiveOrNegative(0)).to.be.equals('neutro');
        })
    })

    describe('quando o parâmetro passado não é um número', () => {
        it('Deve retornar "o parâmetro deve ser um número"', () => {
            expect(positiveOrNegative('a')).to.be.equals('o parâmetro deve ser um número');
        })
    }
    )
})