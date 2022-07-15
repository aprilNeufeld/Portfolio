import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import * as User from './userSlice';
import * as Projects from './projectsSlice';
import * as Blog from './blogSlice';
import { AppDispatch, RootState } from './configureStore';

export const reducers = {
  user: User.default,
  projects: Projects.default,
  blog: Blog.default,
};

// Use throughout the app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = () => useDispatch<AppDispatch>();

export const useApplicationState: TypedUseSelectorHook<RootState> = useSelector;
