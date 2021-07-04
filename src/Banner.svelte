<script>
  export let bgImage, title, description, smallImage, smallAlt
</script>

<header
  class="bg-gray-200 w-full h-96 bg-cover bg-bottom grid"
  style="background-image: url({bgImage})"
>
  <div class="container py-10 align-middle place-self-center text-white flex justify-between">
    <div>
      <h1 class="text-6xl my-4">{title}</h1>
      <p class="text-xl">{description}</p>
    </div>
    <div>
      <img class="h-36" src={smallImage} alt={smallAlt} />
    </div>
  </div>
</header>
