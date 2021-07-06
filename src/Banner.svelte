<script>
  export let bgImage, title, description, smallImage, smallAlt = ''
</script>

<header
  class="bg-gray-500 w-full h-96 bg-cover bg-bottom grid"
  style="background-image: url({bgImage})"
>
  <div class="container py-10 align-middle place-self-center text-white flex justify-between">
    <div>
      <h1 class="h1">{title}</h1>
      <p class="text-2xl">{description}</p>
    </div>
    {#if smallImage}
      <div>
        <img class="w-36" src={smallImage} alt={smallAlt} />
      </div>
    {/if}
  </div>
</header>
