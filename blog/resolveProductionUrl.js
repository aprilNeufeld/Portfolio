import { secret } from './secret';
const url = "https://www.tricksterCodess.com"
//const url = "portfolio-49s17r7pr-trickstercodess.vercel.app"

export default function resolveProductionUrl(document) {
	return `${url}/api/preview?secret=${secret}&slug=${document.slug.current}`
}