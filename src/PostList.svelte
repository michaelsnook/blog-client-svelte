<script>
  const getPosts = (async () => {
    const response = await fetch('http://localhost:3000/api/v1/posts/index')
    return await response.json()
  })()
</script>


<h2 class="h2">All Posts</h2>
{#await getPosts}
  <p>loading posts...</p>
{:then data}
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-content-stretch">
    {#each data as post}
      <a class="border rounded" href="/posts/{post.id}">
        {#if post.image}
          <img class="rounded-t" src={post.image} alt />
        {/if}
        <p class="text-2xl font-display p-4 text-cyan-700 hover:underline">
          {post.title}
        </p>
        {#if !post.image}
          <p class="p-4">
            {post.excerpt}
          </p>
        {/if}
      </a>
    {/each}
  </div>
{:catch error}
  <p>error loading posts: {JSON.stringify(error)}.</p>
{/await}
