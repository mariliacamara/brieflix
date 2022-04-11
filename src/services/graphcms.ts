async function fetchAPI(query: any, variables: any) {
  const res = await fetch(process.env.GRAPHCMS_PROJECT_API!, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${process.env.GRAPHCMS_ACCESS_TOKEN}`},
    body: JSON.stringify({query, variables}),
  })

  const json = await res.json();

  if (json.errors) {
    console.log(json.errors);
    throw new Error("Failed to fetch API");
  }

  return json.data;
}

export async function getAllPosts() {
  const data = await fetchAPI(
    `
    query allPosts {
      posts(orderBy: date_DESC, first: 20) {
        id,
        title,
        excerpt,
        author {
          name,
          picture {
            url
          }
        }
        publishedAt,
        slug,
        tags,
        coverImage {
          url
        }
      }
    }
    `, {})
  return data.posts
}

export async function getAllPostsWithSlug() {
  const data = await fetchAPI(
    `
    query allPosts {
      posts {
        slug
      }
    }
    `, {})
  return data.posts
}

export async function getSinglePostBySlug(slug: string) {
  const data = await fetchAPI(`
    query singlePost($slug: String!) {
      post(where: {slug: $slug}, stage: PUBLISHED) { 
        title
        publishedAt
        tags,
        coverImage {
          url
        },
        content {
          html
        }
      }
    }
  `, {slug})
  return data.post
}