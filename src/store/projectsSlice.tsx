import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { request } from '@octokit/request';

interface ProjectsState {
  projects: ProjectType[];
  pending: boolean;
  loaded: boolean;
}

/**
 * Holds information about a single project
 * to be listed on the /projects page.
 */
export type ProjectType = {
  type: string;
  url: string;
  name: string;
  description: string;
  keywords: string[];
};

const initialState: ProjectsState = {
  projects: [],
  pending: false,
  loaded: false,
};

/*
 * Maps our repos to an object that will later be displayed
 * on our /projects page. We standardize the data so that we can
 * combine our repos with our gists.
 */
const mapRepos = (repos: any[]): ProjectType[] => {
  let array: ProjectType[] = repos.map((repo: any) => {
    let keywords: string[] = [repo.language];

    if (repo['topics']) {
      keywords = [...keywords, ...repo.topics];
    }
    return {
      description: repo.description,
      keywords: keywords,
      name: repo.name,
      type: 'repo',
      url: repo.html_url,
    };
  });

  return array;
};

/*
 * Maps our gists to an object that will later be displayed
 * on our /projects page. We standardize the data so that we can
 * combine our repos with our gists.
 */
const mapGists = (gists: any[]): ProjectType[] => {
  let array: ProjectType[] = gists.map((gist: any) => {
    return {
      description: gist.description,
      keywords: [getLanguage(gist.files[Object.keys(gist.files)[0]].language)],
      name: Object.keys(gist.files)[0],
      type: 'gist',
      url: gist.html_url,
    };
  });

  return array;
};

const getLanguage = (lang: string): string => {
  return lang === 'TSX' ? 'TypeScript' : lang;
};

export const fetchProjects = createAsyncThunk('projects/fetch', async (arg, thunkApi) => {
  const username = 'aprilNeufeld';

  // Get our repos
  const reposResponse = await request({
    method: 'GET',
    url: `/users/{username}/repos`,
    username: username,
    sort: 'updated',
    headers: {
      // Required to include repo topics in response
      accept: 'application/vnd.github.mercy-preview+json',
    },
  });

  const repos: ProjectType[] = mapRepos(reposResponse.data);

  // Get our gists
  const gistsResponse = await request({
    method: 'GET',
    url: `/users/{username}/gists`,
    username: username,
  });
  const gists: ProjectType[] = mapGists(gistsResponse.data);

  // Combine and return
  return {
    projects: [...repos, ...gists],
  } as ProjectsState;
});

const projectsSlice = createSlice({
  name: 'projects',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchProjects.pending, (state, action) => {
      state.pending = true;
      state.loaded = false;
    });
    builder.addCase(fetchProjects.fulfilled, (state, action) => {
      state.projects = action.payload.projects;
      state.pending = false;
      state.loaded = true;
    });
  },
});

export default projectsSlice.reducer;
