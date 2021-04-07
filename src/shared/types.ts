
/**
 * Holds information about a particular
 * page to be rendered, including the component,
 * its name, and its path.
 */
export type Page = {
	component: React.FC,
	title: string,
	path: string
}
