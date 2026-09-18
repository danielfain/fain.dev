import { getCollection } from 'astro:content';

export async function publishedPosts() {
  return (await getCollection('posts', ({ data }) => !data.draft))
    .sort((a, b) => b.data.date.getTime() - a.data.date.getTime() || a.id.localeCompare(b.id));
}

export async function publishedProjects() {
  return (await getCollection('projects', ({ data }) => !data.draft))
    .sort((a, b) => (a.data.featuredOrder ?? Infinity) - (b.data.featuredOrder ?? Infinity)
      || a.data.title.localeCompare(b.data.title));
}

export function formatDate(date: Date) {
  return new Intl.DateTimeFormat('en-US', {
    month: 'short', day: 'numeric', year: 'numeric', timeZone: 'UTC',
  }).format(date);
}
