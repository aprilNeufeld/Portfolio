import { UserState, initialState } from '../store/userSlice';

/*
 * Function that fetches our user data from the gitConnected API,
 * then maps it to our UserState object so that we don't serve up
 * any extraneous/private data.
 *
 * This data is primarily used in the HeaderContent component
 * contained in the shared Layout component, so every page calls
 * this function in their getStaticProps function at build time.
 * Once NextJS allows us to call getStaticProps on our custom _app,
 * we will move this there so it is only called once.
 */
export const fetchUserState = async (): Promise<UserState> => {
  const userResponse = await fetch('https://gitconnected.com/v1/portfolio/aprilNeufeld');
  if (userResponse.status === 200) {
    const json = await userResponse.json();

    // There is another way to do this with Object.entries, filtering, and reducing,
    // but I haven't yet had time to figure out how to adjust that method to include
    // nested objects and arrays like what we're dealing with here
    return {
      basics: {
        label: json.basics.label,
        name: json.basics.name,
        summary: json.basics.summary,
        username: json.basics.username,
      },
      interests: json.interests,
      skills: [...json.skills.map((skill: any) => ({ name: skill.name }))],
    };
  } else return initialState;
};
