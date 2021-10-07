<script context="module">
  import { client } from "$lib/graphql-client"
  import { gql } from "graphql-request";

  export async function load({ fetch }) {
    const res = await fetch('/posts.json');
    if (res.ok) {
      const posts = await res.json();
      return { props: posts }
    }
  }
</script>

<script>
  export let posts;

  console.log({posts})
</script>

<pre>{JSON.stringify(posts, null, 2)}</pre>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

<style>
  p {
    color: red;
  }
</style>