import { GithubAdapterContract } from "@/adapters/contracts/githubadapter.contract";
import { GithubRepository, IGithubRepository } from "@/core/domains/GithubRepository";

export class GithubRepositories {
  constructor(private githubAdapter: GithubAdapterContract){}

  async githubRepositories(): Promise<IGithubRepository[]> {
    return await this.githubAdapter.allGithubRepositories();
  }

}