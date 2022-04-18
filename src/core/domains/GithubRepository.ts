import { GithubCommit } from "./GithubCommit";

const enum Visibility {
  PRIVATE = 'private',
  PUBLIC = 'public'
}

export class GithubReposutory {
  constructor(
    private __name: string,
    private __path: string,
    private __visibility: Visibility,
    private __description: string,
    private __commits: GithubCommit[],
  ) {}

  get name(): string {
    return this.__name;
  }

  get path(): string {
    return this.__path;
  }

  get visibility(): Visibility {
    return this.__visibility;
  }

  get description(): string {
    return this.__description;
  }

  get link(): GithubCommit[] {
    return this.__commits;
  }
}