import { GithubServiceContract } from "@/adapters/contracts/githubservice.contract";
import repositories from '../../../json/repositories-model.json';
import commits from '../../../json/repository-commits-model.json';


export class GithubServiceMock implements GithubServiceContract {
  constructor() {}
  
  async getAllRepositories(): Promise<any[]> {
    return repositories.filter(repository => repository.fork === false)
  }
  
  async getRepositoryCommits(repositoryName: string): Promise<any[]> {
    return commits;
  }
}