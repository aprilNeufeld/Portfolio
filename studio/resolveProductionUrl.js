
import { secret } from './secret';

export default function resolveProductionUrl(document) {

	const url = process.env.NODE_ENV === "production"
		? `https://www.trickstercodess.com`
		: `http://localhost:3000`;

	return `${url}/api/preview?secret=${secret}&slug=${document.slug.current}`
} 