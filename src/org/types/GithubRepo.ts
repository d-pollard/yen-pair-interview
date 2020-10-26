export interface GithubRepo {
  id: number;
  name: string;
  description: string;
  stars: number;
}

export const convertIntoGithubRepo = (githubRepoFragment: any): GithubRepo => ({
  id: githubRepoFragment.id,
  name: githubRepoFragment.name,
  description: githubRepoFragment.description || '',
  stars: githubRepoFragment.stargazers_count,
});

export const convertIntoGithubRepos = (
  githubReposFragment: any[],
): GithubRepo[] => githubReposFragment.map(convertIntoGithubRepo);
