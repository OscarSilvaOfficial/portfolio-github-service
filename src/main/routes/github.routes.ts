import { GithubController } from '@/adapters/controllers/github.controller';
import { GithubAdapter } from '@/adapters/github/github.adapter';
import { GithubService } from '@/infra/external/github.service';
import { basePath as Router, get as GET } from 'express-decorators';

@Router('/')
export class GithubRoutes {
  controller: GithubController;

  constructor() {
    const service = new GithubService();
    const adapter = new GithubAdapter(service);
    this.controller = new GithubController(adapter);
  }

  @GET('/')
  async allRepositories(_request, response) {
    try {
      const repositories = await this.controller.allGithubRepositoriesWithCommits();
      response.send(repositories)
    } catch (error) {
      const statusCode = error.response.status
      const message = error.response.data.message
      if (statusCode == 403) response.status(statusCode).send(message)
      else response.status(500).send(message)
    } 
  }
}