import { GithubServiceContract } from "@/adapters/contracts/githubservice.contract";
import { GithubCommit } from "@/core/domains/GithubCommit";
import { GithubRepository, IGithubRepository, Visibility } from "@/core/domains/GithubRepository";

export class GithubAdapter {
  constructor(private githubService: GithubServiceContract){}

  private entityDTO(commitData: any): GithubCommit {
    const { sha, commit } = commitData
    return new GithubCommit({
      sha: sha,
      author: commit.author.name,
      date: commit.author.date,
      message: commit.message,
      link: commit.url
    });
  }

  private repositoryDTO(repositoryData: any, commitData: any): GithubRepository {
    return new GithubRepository({
      name: repositoryData.name,
      path: repositoryData.full_name,
      visibility: repositoryData.private ? Visibility.PRIVATE : Visibility.PUBLIC,
      description: repositoryData.description,
      commits: commitData.map(this.entityDTO)
    });
  }

  async allGithubRepositories(): Promise<GithubRepository[]> {
    const repositoriesRequest = await this.githubService.getAllRepositories();
    return await Promise.all(
      repositoriesRequest.map( async (repository: any) => {
        const commits = await this.githubService.getRepositoryCommits(repository.name);
        return this.repositoryDTO(repository, commits);
      }
    ))
  }
}