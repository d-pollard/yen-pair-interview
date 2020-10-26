import { GithubRepo } from '../types/GithubRepo';
import { useCallback } from 'react';

interface Props {
  githubRepo: GithubRepo;
}

type PartialType<T> = {
  [P in keyof T]?: T[P];
};

export function useEditGithubRepo({ githubRepo }: Props) {
  return useCallback(
    (partialGithubRepo: PartialType<GithubRepo>) => {
      return { ...githubRepo, ...partialGithubRepo };
    },
    [githubRepo],
  );
}
