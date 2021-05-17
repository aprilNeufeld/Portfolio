import { secret } from './secret';


export default function resolveProductionUrl(document) {

	const url = process.env.NODE_ENV === "production"
		? `../../api`
		: `http://localhost:3000/`;

	return `${url}/preview?secret=${secret}&slug=${document.slug.current}`
} 