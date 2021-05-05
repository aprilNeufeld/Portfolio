
import { ProjectType } from "../shared/types";
import { UserState } from "../store/userSlice";

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
	const userResponse = await fetch(
		'https://gitconnected.com/v1/portfolio/tricksterCodess'
	);
	const json = await userResponse.json();

	// There is another way to do this with Object.entries, filtering, and reducing,
	// but I haven't yet had time to figure out how to adjust that method to include
	// nested objects and arrays like what we're dealing with here
	return {
		basics: {
			label: json.basics.label,
			name: json.basics.name,
			summary: json.basics.summary,
			username: json.basics.username
		},
		interests: json.interests,
		projects: mapProjects(json.projects),
		skills: [
			...json.skills.map((skill: any) => ({ name: skill.name }))
		]
	}
}

/*
 * Maps our projects to an object that will later be displayed 
 * on our /projects page. We standardize the data so that we can
 * combine our repos with our gists (fetched later on /projects).
 */
const mapProjects = (projects: any[]): ProjectType[] => {
	let array: ProjectType[] = projects.map(
		(project: any) => {
			return {
				description: project.summary,
				languages: [...project.languages, ...project.libraries],
				name: project.name,
				type: 'repo',
				url: project.githubUrl
			}
		});

	return array;
}
