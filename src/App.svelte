<script>
  import PostCard from './PostCard.svelte'
  export let name
  const getPosts = (async () => {
    const response = await fetch('http://localhost:3000/api/v1/posts/index')
    return await response.json()
  })()
</script>

<header>
  <h1>Hello {name}!</h1>
  <p>Visit the <a href="https://svelte.dev/tutorial">Svelte tutorial</a> to learn how to build Svelte apps.</p>
</header>

<main>
  <h2>All the posts</h2>
  {#await getPosts}
  <p>loading posts...</p>
  {:then data}
    {#each data as post}
      <PostCard {...post} />
    {/each}
  {:catch error}
    <p>error loading posts.</p>
  {/await}
</main>

<footer></footer>

<style>
  main {
    padding: 1em;
    max-width: 26rem;
    margin: 0 auto;
  }

  h1 {
    color: #ff3e00;
    text-transform: uppercase;
    font-size: 4rem;
    font-weight: 300;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>