import { GithubRepository } from "@/core/domains/GithubRepository";

export interface GithubAdapterContract {
  allGithubRepositories(): Promise<GithubRepository[]>
}