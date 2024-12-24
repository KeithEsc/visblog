import * as prismic from '@prismicio/client';

const repoName = 'visblog';
const endpoint = prismic.getRepositoryEndpoint(repoName);

export const client = prismic.createClient(endpoint);

export async function getBlogPosts() {
  return await client.getAllByType('blog_post', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });
}

export async function getPortfolioItems() {
  return await client.getAllByType('portfolio_item', {
    orderings: {
      field: 'document.first_publication_date',
      direction: 'desc',
    },
  });
}

export async function getPage(type: string) {
  const pages = await client.getAllByType('page');
  return pages.find(page => page.uid === type);
}