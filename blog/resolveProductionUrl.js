import { secret } from './secret';

export default function resolveProductionUrl(document) {
	return `https://www.tricksterCodess.com/api/preview?secret=${secret}&slug=${document.slug.current}`
}