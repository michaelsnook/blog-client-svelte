<script>
  const getPosts = (async () => {
    const response = await fetch('http://localhost:3000/api/v1/posts/index')
    return await response.json()
  })()
</script>

<main>
  <h2>All the posts</h2>
  {#await getPosts}
  <p>loading posts...</p>
  {:then data}

    {#each data as post}
      <p>
        <a href="/posts/{post.id}">
          {post.title}
        </a>
      </p>
    {/each}

  {:catch error}
    <p>error loading posts.</p>
  {/await}
</main>