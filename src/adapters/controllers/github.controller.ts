import { GithubRepository } from "@/core/domains/GithubRepository";
import { GithubAdapterContract } from "../contracts/githubadapter.contract copy";

export class GithubController {
  constructor(private githubAdapter: GithubAdapterContract) {}

  async allGithubRepositoriesWithCommits(): Promise<GithubRepository[]> {
    return await this.githubAdapter.allGithubRepositories();
  }
}