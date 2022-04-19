import { GithubServiceContract } from "@/adapters/contracts/githubservice.contract";
import axios from "axios";

const GITHUB_URL = "https://api.github.com"

export class GithubService implements GithubServiceContract {
  constructor() {}
  
  async getAllRepositories(): Promise<undefined> {
    const REPOSITORY_PATH = "/users/OscarSilvaOfficial/repos"
    const response = await axios.get(`${GITHUB_URL}${REPOSITORY_PATH}`);
    return response.data.filter(repository => repository.fork === false);
  }
  
  async getRepositoryCommits(repositoryName: string): Promise<undefined> {
    const REPOSITORY_COMMITS_PATH = `/repos/OscarSilvaOfficial/${repositoryName}/commits`
    const response = await axios.get(`${GITHUB_URL}${REPOSITORY_COMMITS_PATH}`);
    return response.data;
  }
}