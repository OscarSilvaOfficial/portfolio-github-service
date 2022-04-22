export interface IGithubCommit {
  sha: string,
  author: string,
  date: Date,
  message: string,
  link: string,
}

export class GithubCommit {
  constructor(private github_commit: IGithubCommit) {}

  get sha(): string {
    return this.github_commit.sha;
  }

  get author(): string {
    return this.github_commit.author;
  }

  get date(): Date {
    return this.github_commit.date;
  }

  get message(): string {
    return this.github_commit.message;
  }

  get link(): string {
    return this.github_commit.link;
  }

  toJSON(): IGithubCommit {
    return this.github_commit;
  }
}