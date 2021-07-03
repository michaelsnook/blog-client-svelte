<script>
  import PostList from './PostList.svelte'
  export let title, description
</script>


<header>
  <div class="container">
    <h1 class="text-cyan-600 text-4xl">{title}</h1>
    <p>{description}</p>
  </div>
</header>

<main class="container py-5">
  <PostList />
</main>

<footer></footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  header, footer {
    @apply bg-gray-200 w-full py-10;
  }
</style>
