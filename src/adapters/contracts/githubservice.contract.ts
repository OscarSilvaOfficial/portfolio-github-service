export interface GithubServiceContract {
  getAllRepositories(): Promise<undefined>;
  getRepositoryCommits(repositoryName: string): Promise<undefined>;
}