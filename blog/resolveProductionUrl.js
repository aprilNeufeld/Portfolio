import { secret } from './secret';
const projectUrl = 'http://localhost:3000';

export default function resolveProductionUrl(document) {
	return `${projectUrl}/api/preview?secret=${secret}&slug=${document.slug.current}`
}