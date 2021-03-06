import { GithubServiceContract } from "@/adapters/contracts/githubservice.contract";
import { GithubCommit, IGithubCommit } from "@/core/domains/GithubCommit";
import { GithubRepository, IGithubRepository, Visibility } from "@/core/domains/GithubRepository";
import { GithubAdapterContract } from "@/adapters/contracts/githubadapter.contract";

export class GithubAdapter implements GithubAdapterContract {
  constructor(private githubService: GithubServiceContract){}

  private commitDTO(commitData: any): IGithubCommit {
    const { sha, commit } = commitData
    const commitEntity = new GithubCommit({
      sha: sha,
      author: commit.author.name,
      date: commit.author.date,
      message: commit.message,
      link: commit.url
    });
    return commitEntity.toJSON();
  }

  private repositoryDTO(repositoryData: any, commitData: any): IGithubRepository {
    const repositoryEntity = new GithubRepository({
      name: repositoryData.name,
      path: repositoryData.full_name,
      visibility: repositoryData.private ? Visibility.PRIVATE : Visibility.PUBLIC,
      description: repositoryData.description,
      commits: commitData.map(this.commitDTO)
    });
    return repositoryEntity.toJSON();
  }

  async allGithubRepositories(): Promise<IGithubRepository[]> {
    const repositoriesRequest = await this.githubService.getAllRepositories();
    return Promise.all(
      repositoriesRequest.map( async (repository: any) => {
        const commits = await this.githubService.getRepositoryCommits(repository.name);
        return this.repositoryDTO(repository, commits);
      })
    )
  }
}