<script>
  const getPosts = (async () => {
    const response = await fetch('http://localhost:3000/api/v1/posts/index')
    return await response.json()
  })()
</script>


<h2 class="text-2xl">All the posts</h2>
<section>
{#await getPosts}
<p>loading posts...</p>
{:then data}
  {#each data as post}
    <div>
      <a class="text-green-700 hover:underline" href="/posts/{post.id}">
        {post.title}
      </a>
    </div>
  {/each}
{:catch error}
  <p>error loading posts.</p>
{/await}
</section>
