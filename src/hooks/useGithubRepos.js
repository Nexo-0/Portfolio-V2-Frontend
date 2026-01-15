import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const USERNAME = 'Nexo-0'; // Your GitHub Username

export const useGithubRepos = () => {
  return useQuery({
    queryKey: ['repos', USERNAME],
    queryFn: async () => {
      const { data } = await axios.get(
        `https://api.github.com/users/${USERNAME}/repos?sort=pushed&per_page=6&type=owner`
      );
      return data;
    },
    staleTime: 1000 * 60 * 5, // Cache data for 5 minutes
  });
};