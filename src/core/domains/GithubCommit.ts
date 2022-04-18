export class GithubCommit {
  constructor(
    private __sha: string,
    private __author: string,
    private __date: Date,
    private __message: string,
    private __link: string,
  ) {}

  get sha(): string {
    return this.__sha;
  }

  get author(): string {
    return this.__author;
  }

  get date(): Date {
    return this.__date;
  }

  get message(): string {
    return this.__message;
  }

  get link(): string {
    return this.__link;
  }
}