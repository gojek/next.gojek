import GhostContentAPI from '@tryghost/content-api';

//Ghost API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://gojek-ghost.zysk.in',
  key: '9e7a24ce961a25ddbc119bfbbd',
  version: 'v3',
});

// Get 4 Latest posts
export async function getLatestPosts() {
  return await api.posts
    .browse({ order: 'published_at DESC', limit: 4, include: 'tags,authors' })
    .catch((err) => {
      console.error(err);
    });
}

// Get all tags
export async function getTags() {
  return await api.tags.browse({ order: 'slug ASC' }).catch((err) => {
    console.error(err);
  });
}

// Get featured posts
export async function getFeaturedPosts() {
  return await api.posts
    .browse({ order: 'published_at DESC', limit: 3, include: 'tags,authors' }, { featured: true })
    .catch((err) => {
      console.error(err);
    });
}
