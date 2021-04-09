
/**
 * Holds information about a particular
 * page to be rendered, including its name 
 * and its path.
 */
export type Page = {
	title: string,
	path: string
}

/**
 * Holds information about a single project
 * to be listed on the /projects page.
 */
export type ProjectType = {
	type: string,
	url: string,
	name: string,
	description: string,
	languages: string[]
}
