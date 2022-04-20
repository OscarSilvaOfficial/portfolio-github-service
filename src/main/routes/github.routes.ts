import { Application } from 'express';

export function githubRoutes(app: Application) {
  app.get('/', (req, res) => {
    res.send('Hello World!')
  })
}