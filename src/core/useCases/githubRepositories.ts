import { GithubServiceContract } from "@/adapters/contracts/githubservice.contract";
import { GithubRepository } from "@/core/domains/GithubRepository";

export class GithubRepositories {
  constructor(private githubService: GithubServiceContract){}

  get githubRepositories(): GithubRepository[] {
    return []
  }

}