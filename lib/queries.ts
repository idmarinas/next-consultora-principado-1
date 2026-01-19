export const QueryGetNodeByUri = `
query GetNodeByUri($uri: String!) {
  nodeByUri(uri: $uri) {
    __typename
    ... on Category {
      id
      name
      slug
      description
      posts(first: 10) {
        nodes {
          id
          title
          slug
          featuredImage {
            node {
              sourceUrl
            }
          }
          excerpt
          date
        }
        pageInfo {
          endCursor
          hasNextPage
          hasPreviousPage
        }
      }
    }
    ... on Servicio {
      id
      title
      uri
      content
      datosServicio {
        icono
        color
      }
    }
    ... on Page {
      id
      title
      content
      slug
      featuredImage {
        node {
          sourceUrl
        }
      }
      children(first: 20) {
        nodes {
          ... on Page {
            id
            title
            uri
          }
        }
      }
    }
    ... on Post {
      id
      title
      content
      date
      featuredImage {
        node {
          sourceUrl
        }
      }
      categories {
        nodes {
          name
          slug
          uri
        }
      }
      author {
        node {
          name
        }
      }
    }
    ... on Tag {
      id
      name
    }
    ... on PostFormat {
      id
      name
    }
    ... on MediaItem {
      id
    }
    ... on Comment {
      id
    }
    ... on User {
      id
      email
    }
    ... on ContentType {
      id
      name
    }
  }
}
`
// lib/queries.ts (o dentro del componente)
export const MUTATION_CREATE_LEAD = `
  mutation CreateLead($input: EnviarFormularioContactoInput!) {
    enviarFormularioContacto(input: $input) {
      success
      id
    }
  }
`;