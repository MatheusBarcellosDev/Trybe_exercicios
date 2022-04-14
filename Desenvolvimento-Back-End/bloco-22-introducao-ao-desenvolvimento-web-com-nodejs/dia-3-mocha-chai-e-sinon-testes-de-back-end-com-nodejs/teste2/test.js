const fs = require('fs');
const sinon = require('sinon');
const { expect } = require('chai');

const escrevaArquivo = require('./escrevaArquivo');

describe('Executa a funcao escrevaArquivo', () => {
    before(() => {
        sinon.stub(fs, 'writeFileSync');
    });

    after(() => {
        fs.writeFileSync.restore();
    });

    describe('a resposta', () => {
        it('é uma "string', () => {
            const resposta = escrevaArquivo('arquivo.txt', 'texto1');

            expect(resposta).to.be.a('string');
        })

        it('é igual a "texto1"', () => {
            const resposta = escrevaArquivo('arquivo.txt', 'texto1');

            expect(resposta).to.equals('ok');
        })
    })
})