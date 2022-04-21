import { GithubAdapterContract } from "@/adapters/contracts/githubadapter.contract";
import { GithubRepository } from "@/core/domains/GithubRepository";

export class GithubRepositories {
  constructor(private githubAdapter: GithubAdapterContract){}

  async githubRepositories(): Promise<GithubRepository[]> {
    return await this.githubAdapter.allGithubRepositories();
  }

}