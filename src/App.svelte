<script>
  import PostList from './PostList.svelte'
  import Banner from './Banner.svelte'
  export let title, description
</script>


<Banner
  bgImage="/como.jpg" {title} {description}
  smallImage="/my-face-circle.png" smallAlt="A cartoon face of the author, Michael"
/>

<main class="container py-5">
  <PostList />
</main>

<footer></footer>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  body {
    @apply font-sans text-gray-800 font-light;
  }

  .h1 {
    @apply text-6xl my-4 font-display;
  }
  .h2 {
    @apply text-4xl my-4 font-display font-bold;
  }
  .h3 {
    @apply text-2xl my-3 font-display font-bold;
  }
  .h4 {
    @apply text-xl my-2 font-display font-bold;
  }
  .h5 {
    @apply text-lg my-2 font-bold;
  }

  footer {
    @apply bg-gray-200 w-full py-10;
  }
</style>
