import { GithubRepository } from "@/core/domains/GithubRepository";
import { GithubAdapterContract } from "../contracts/githubadapter.contract";
import { GithubRepositories } from "@/core/useCases/githubRepositories"

export class GithubController {
  useCase: GithubRepositories;

  constructor(githubAdapter: GithubAdapterContract) {
    this.useCase = new GithubRepositories(githubAdapter);
  }

  async allGithubRepositoriesWithCommits(): Promise<GithubRepository[]> {
    return await this.useCase.githubRepositories();
  }
}