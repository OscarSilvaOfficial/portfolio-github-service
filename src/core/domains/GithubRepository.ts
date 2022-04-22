import { GithubCommit } from "./GithubCommit";

export const enum Visibility {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export interface IGithubRepository {
  name: string,
  path: string,
  visibility: Visibility,
  description: string,
  commits: GithubCommit[],
}

export class GithubRepository {
  constructor(private github_repository: IGithubRepository) {}

  get name(): string {
    return this.github_repository.name;
  }

  get path(): string {
    return this.github_repository.path;
  }

  get visibility(): Visibility {
    return this.github_repository.visibility;
  }

  get description(): string {
    return this.github_repository.description;
  }

  get commits(): GithubCommit[] {
    return this.github_repository.commits;
  }

  toJSON(): IGithubRepository {
    return this.github_repository;
  }
}