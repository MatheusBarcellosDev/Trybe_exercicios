// githubApi.test.js

const fetch = require('node-fetch');

const getRepos = (url) => (
  fetch(url)
    .then((response) => response.json())
    .then((data) => data.map((repo) => repo.name))
);

// implemente seus testes aqui

describe("Checar se os repositorios se encontram na lista", () => {
  it("Verifica se o repositorio sd-01-week4-5-project-todo-list está na lista", async () => {
    const repos = await getRepos("https://api.github.com/orgs/tryber/repos");
    expect(repos).toContain("sd-01-week4-5-project-todo-list");
  });

  it("Verifica se o repositorio sd-01-week4-5-project-meme-generator está na lista", async () => {
    const repos = await getRepos("https://api.github.com/orgs/tryber/repos");
    expect(repos).toContain("sd-01-week4-5-project-meme-generator");
  });
});


beforeEach(() => console.log('1 - beforeEach'));
afterEach(() => console.log('1 - afterEach'));

test('', () => console.log('1 - test'));

describe('Scoped / Nested block', () => {
  beforeEach(() => console.log('2 - beforeEach'));
  afterEach(() => console.log('2 - afterEach'));

  test('', () => console.log('2 - test'));
});
