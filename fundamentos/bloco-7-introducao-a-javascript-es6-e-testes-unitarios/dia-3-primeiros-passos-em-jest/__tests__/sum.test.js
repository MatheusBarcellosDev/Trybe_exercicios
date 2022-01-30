const { sum } = require('../sum')


describe("Teste 1:", () => {
        it("Testa se o retorno da soma de 4 , 5 é 9", () => {
            expect(sum(4, 5)).toBe(9)
        })

        it("Testa se o retorno da soma de 0 , 0 é 0", () => {
            expect(sum(0, 0)).toBe(0)
        })

        it("Testa se a funcao lanca um erro quando os parametros forem string", () => {
            expect(() => {
                sum(4, '5')
            }).toThrow();
        });

        it("Testa se a mensagem de erro é 'parameters must be numbers'", () => {
            expect(() => {
                sum(4, '5')
            }).toThrowError(new Error('parameters must be numbers'));
        })
    }
)





  