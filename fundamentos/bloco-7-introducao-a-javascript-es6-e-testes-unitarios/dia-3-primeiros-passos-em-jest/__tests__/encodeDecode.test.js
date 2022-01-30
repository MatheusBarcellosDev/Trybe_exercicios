const { encode, decode } = require('../sum')

describe("Teste 1", () => {
    it("Verifica de encode é uma funcao", () => {
        expect(typeof encode).toBe("function")
    })
    it("Verifica de decode é uma funcao", () => {
        expect(typeof decode).toBe("function")
    })
    it("Teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5", () => {
        expect(encode("a,e,i,o,u")).toBe("1,2,3,4,5")
    })
    it("Teste se as vogais 1, 2, 3, 4 e 5 são convertidas em a, e, i, o, u", () => {
        expect(decode("1,2,3,4,5")).toBe("a,e,i,o,u")
    })
    it("Teste se as demais letras/números não são convertidos para cada caso", () => {
        expect(encode("r,t,p,m,n")).not.toBe("1,2,3,4,5")
    })
    it("Teste se as demais letras/números não são convertidos para cada caso", () => {
        expect(decode("10,6,9,30,60")).not.toBe("a,e,i,o,u")
    })
    it("Teste se a string que é retornada pelas funções têm o mesmo número de caracteres que a string passada como parâmetro.", () => {
        expect(encode("a,e,i,o,u")).toHaveLength(9)
        expect(decode("1,2,3,4,5")).toHaveLength(9)
    })
    

})