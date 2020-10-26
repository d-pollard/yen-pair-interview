import axios, { AxiosInstance } from 'axios';
import { orgEnv } from '../helpers/orgEnv';
import { GithubUserRepos } from './apitypes/GithubUserRepos';
import { convertIntoGithubRepos } from '../types/GithubRepo';

export class OrgApi {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({
      baseURL: orgEnv.backendApi,
    });
  }

  getReposForUser = async (username: string) => {
    const response: GithubUserRepos = { success: false, errors: [], repos: [] };

    await this.api
      .get(`/users/${username}/repos?type=all&sort=updated`)
      .then(r => {
        response.success = true;
        response.repos = convertIntoGithubRepos(r.data);
      })
      .catch(e => {
        if (e.response.data && e.response.data.message) {
          response.errors.push(e.response.data.message);
        }
      });

    return response;
  };
}
