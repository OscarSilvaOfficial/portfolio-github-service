import { IGithubRepository } from "@/core/domains/GithubRepository";

export interface GithubAdapterContract {
  allGithubRepositories(): Promise<IGithubRepository[]>
}