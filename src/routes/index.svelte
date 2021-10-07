<script context="module">
  import { gql, GraphQLClient } from "graphql-request";

  export async function load() {
    const client = new GraphQLClient('https://api-us-west-2.graphcms.com/v2/ckuh5l8ip09qc01xpal9t476s/master');

    const query = gql`
      query Posts {
        posts {
          title
          slug
          date
          excerpt
          tags
          coverImage {
            url
          }
        }
      }
    `;

    const { posts } = await client.request(query);

    return { 
      props: { posts }
    }
  }
</script>

<script>
  export let posts;

  console.log({posts})
</script>

<pre>{JSON.stringify(posts)}</pre>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
