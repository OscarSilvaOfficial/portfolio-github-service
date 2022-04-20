import { GithubAdapter } from "@/adapters/github/github.adapter";
import { GithubServiceMock } from "@/infra/internal/github.mock.service";

describe("Test do adapter do github", () => {
  it("Deve retornar todos os repositórios do GITHUB mocados com seus commits", async () => {
    const service = new GithubServiceMock();
    const adapter = new GithubAdapter(service);
    const repositories = await adapter.allGithubRepositories();
    expect(repositories.length > 0).toBeTruthy();
    expect(repositories[0].commits.length > 0).toBeTruthy();
  })
})