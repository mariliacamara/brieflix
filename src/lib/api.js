const API_URL = process.env.NEXT_PUBLIC_GRAPHQL_API

async function fetchAPI(query, { variables } = {}) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      query,
      variables
    })
  })

  const json = await res.json()
  if (json.errors) {
    console.log(json.errors)
    console.log('error details', query, variables)
    throw new Error('Failed to fetch API')
  }
  return json.data
}

export async function getProjects() {
  const data = await fetchAPI(
    `
    query movies {
      movies {
        edges {
          node {
            title
            slug
            moviefields {
              releaseyear
              projectType
            }
            featuredImage {
              node {
                mediaItemUrl
              }
            }
          }
        }
      }
    }
    `
  )

  return data?.movies
}
