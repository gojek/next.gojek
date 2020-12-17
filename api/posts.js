import GhostContentAPI from '@tryghost/content-api';

//Ghost API instance with site credentials
const api = new GhostContentAPI({
  url: 'https://blog.gojek.io',
  key: 'dc81903c2020e7c9d2f8bafcf7',
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

// Get featured posts
export async function getAllPosts() {
  return await api.posts
    .browse({ order: 'published_at DESC', include: 'tags,authors' }, { featured: true })
    .catch((err) => {
      console.error(err);
    });
}

// Get Tech posts
export async function getPosts(tag) {
  return await api.posts
    .browse({
      filter: `tag: ${tag}`,
      order: 'published_at DESC',
      limit: 4,
      include: 'tags,authors',
    })
    .catch((err) => {
      console.error(err);
    });
}

// Get Blog details
export async function getPost(postSlug) {
  return await api.posts
    .read(
      {
        slug: postSlug,
      },
      {
        include: 'tags,authors',
      },
    )
    // .browse({ include: 'tags,authors' })
    .catch((err) => {
      console.error(err);
    });
}

// Search posts
export function search() {
  return api.posts
    .browse({ order: 'published_at DESC', limit: 4, include: 'tags,authors' })
    .catch((err) => {
      console.error(err);
    });
}
