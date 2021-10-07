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
</script>

<svelt:head>
  <title>Jamstack Conf Blog</title>
</svelt:head>

<h1>Welcome to SvelteKit</h1>

<ul>
  {#each posts as post}
    <li class="card text-center shadow-2xl mb-20">
      <figure class="px-10 pt-10">
        {#if post.coverImage.url}
          <img class="rounded-xl" src={post.coverImage.url} alt={`cover image for ${post.title}`} />
        {:else}
          <img class="rounded-xl" src="/default-cover-image.png" alt="default cover image" />
        {/if}
        <h2 class="title font-bold text-2xl mb-2">
          {post.title}
        </h2>
        <p class="mb-2">{post.excerpt}</p>
        <div>
          {#if post.tags}
            {#each post.tags as tag}
              <span class="badge badge-primary">
                {tag}
              </span>
            {/each}
          {/if}
        </div>
        <div class="mt-2">
          <a sveltekit:prefetch href={`/posts/${post.slug}`} class="btn btn-outline btn-primary">Read</a>
        </div>
      </figure>
    </li>
  {/each}
</ul>
