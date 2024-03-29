import {request,gql} from 'graphql-request';
const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT;

export const getPosts = async() =>{
    const query = gql`
    query MyQuery {
        postsConnection {
          edges {
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
                class
                username
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `
    const result = await request(graphqlAPI,query);
    return result.postsConnection.edges;
}
 
  export const getPostDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          excerpt
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
            class
            username
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.post;
  };
  
  export const getSimilarPosts = async (categories, slug) => {
    const query = gql`
      query GetPostDetails($slug: String!, $categories: [String!]) {
        posts(
          where: {
            slug_not: $slug
            AND: { categories_some: { slug_in: $categories } }
          }
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query, { slug, categories });
    const final_result = result.posts;
    const reversed_result = final_result.reverse();
  
    return reversed_result;
  };

  export const getRecentPosts = async () => {
    const query = gql`
      query GetPostDetails() {
        posts(
          orderBy: createdAt_ASC
          last: 3
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
    const result = await request(graphqlAPI, query);
    const final_result = result.posts;
    const reversed_result = final_result.reverse();
  
    return reversed_result;
  };
  


  export const getAdjacentPosts = async (createdAt, slug) => {
    const query = gql`
      query GetAdjacentPosts($createdAt: DateTime!,$slug:String!) {
        next:posts(
          first: 1
          orderBy: createdAt_ASC
          where: {slug_not: $slug, AND: {createdAt_gte: $createdAt}}
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
        previous:posts(
          first: 1
          orderBy: createdAt_DESC
          where: {slug_not: $slug, AND: {createdAt_lte: $createdAt}}
        ) {
          title
          featuredImage {
            url
          }
          createdAt
          slug
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug, createdAt });
  
    return { next: result.next[0], previous: result.previous[0] };
  };
  
  export const getCategoryPost = async (slug) => {
    const query = gql`
      query GetCategoryPost($slug: String!) {
        postsConnection(where: {categories_some: {slug: $slug}}) {
          edges {
            cursor
            node {
              author {
                bio
                name
                id
                photo {
                  url
                }
                class
                username
              }
              createdAt
              slug
              title
              excerpt
              featuredImage {
                url
              }
              categories {
                name
                slug
              }
            }
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.postsConnection.edges;
  };

  export const getAuthor = async(username) =>{
    const query = gql`
    query getAuthorDetails($username : String!) {
      authorsConnection(where: {username: $username}) {
        edges {
          node {
            id
            name
            photo {
              url
            }
            bio
            class
            username
          }
        }
      }
    }
    `
    const result = await request(graphqlAPI, query, { username });
    return result.authorsConnection.edges;
  }

  export const getAllAuthors = async() => {
    const query = gql`
    query getAllAuthors {
      authors {
        id
        photo {
          url
        }
        name
        bio
        class
        username
      }
    }
    `
    const result = await request(graphqlAPI,query);
    return result.authors;
  }

  export const getAuthorPosts = async (username) => {
    const query = gql`
      query getAuthorPosts($username: String!) {
        postsConnection(where: { author: { username: $username } }) {
          edges {
            node {
              author {
                photo {
                  url
                }
                bio
                name
                id
              }
              featuredImage {
                url
              }
              excerpt
              title
              slug
            }
          }
        }
      }
    `;
    const result = await request(graphqlAPI, query, { username });
    return result.postsConnection.edges;
  }

  export const getAuthors = async () => {
    const query = gql`
      query GetAuthors {
        authors {
          name
          username
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.authors;
  };

  export const getCategories = async () => {
    const query = gql`
      query GetCategories {
          categories {
            name
            slug
          }
      }
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.categories;
  };
  
  
  export const getFeaturedPosts = async () => {
    const query = gql`
      query GetCategoryPost() {
        posts(where: {featuredPost: true}) {
          author {
            name
            photo {
              url
            }
          }
          featuredImage {
            url
          }
          title
          slug
          createdAt
        }
      }   
    `;
  
    const result = await request(graphqlAPI, query);
  
    return result.posts;
  };
  
  export const submitComment = async (obj) => {
    const result = await fetch('/api/comments', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  };

  export const submitContact = async (obj) => {
    const result = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    });
  
    return result.json();
  };

  
  
  export const getComments = async (slug) => {
    const query = gql`
      query GetComments($slug:String!) {
        comments(where: {post: {slug:$slug}}){
          name
          createdAt
          comment
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
  
    return result.comments;
  };
  




