import LinkifyIt, { Match } from 'linkify-it';

/**
 * A custom match decorator to be used by the Linkify component. This defines exactly
 * which top-level domains (tlds) we want to be linkified; without customizing them,
 * unexpected non-links end up being linkified in the Projects page.
 */
const linkify = new LinkifyIt();
linkify.tlds(['aprilneufeld.ca', 'tiny.cc']);

export default (text: string): Match[] | null => linkify.match(text);
