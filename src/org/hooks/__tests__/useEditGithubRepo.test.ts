import { useEditGithubRepo } from '../useEditGithubRepo';
import { GithubRepo } from '../../types/GithubRepo';
import { renderHook, act } from '@testing-library/react-hooks';

describe('testing custom hook useEditGithubRepo', () => {
  it('should be able to modify a github repo', function () {
    let sampleGithubRepo: GithubRepo = {
      description: 'A simple repo',
      id: 10,
      name: 'Another one',
      stars: 1000,
    };

    const { result } = renderHook(() =>
      useEditGithubRepo({ githubRepo: sampleGithubRepo }),
    );

    act(() => {
      sampleGithubRepo = result.current({ stars: 100 });
    });

    expect(sampleGithubRepo.stars).toEqual(100);
  });
});
