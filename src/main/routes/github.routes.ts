import { GithubController } from '@/adapters/controllers/github.controller';
import { GithubAdapter } from '@/adapters/github/github.adapter';
import { GithubService } from '@/infra/external/github.service';
import { Application } from 'express';

export function githubRoutes(app: Application) {

  const service = new GithubService();
  const adapter = new GithubAdapter(service);
  const controller = new GithubController(adapter);

  app.get('/', async (req, res) => {
    const response = await controller.allGithubRepositoriesWithCommits();
    res.send(response)
  })
  
}