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

  footer {
    @apply bg-gray-200 w-full py-10;
  }
</style>
