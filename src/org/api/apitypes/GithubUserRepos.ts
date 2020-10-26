import { GithubRepo } from '../../types/GithubRepo';

export interface GithubUserRepos {
  success: boolean;
  errors: string[];
  repos: GithubRepo[];
}
