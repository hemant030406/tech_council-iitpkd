<script lang="ts">
    import { onDestroy, onMount } from "svelte";
    import car1 from "$lib/assets/car1.webp"
    import car2 from "$lib/assets/car2.webp"
    import car3 from "$lib/assets/car3.webp"
    import car4 from "$lib/assets/car4.webp"

  let images = [
    car1,
    car2,
    car3,
    car4
  ];

  let currentIndex = 0;
  let interval: any;

  // Function to shift to the next image
  const nextImage = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const next = () => {
    currentIndex = (currentIndex + 1) % images.length;
  };

  const prev = () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
  };

  // Set up an interval to shift the image every 3 seconds
  onMount(() => {
    interval = setInterval(nextImage, 3000); // Change every 3 seconds
  });

  // Clear interval when component is destroyed
  onDestroy(() => {
    clearInterval(interval);
  });
</script>

<div class="carousel">
  {#each images as image, i}
    <img
      src={image}
      alt={`Image ${i}`}
      class:hidden={currentIndex !== i}
      class:visible={currentIndex === i}
    />
  {/each}
  <div class="controls">
    <button class="control-button" on:click={prev}>❮</button>
    <button class="control-button" on:click={next}>❯</button>
  </div>
</div>

<style>
.controls {
    position: absolute;
    top: 50%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    transform: translateY(-50%);
  }

  .control-button {
    background-color: rgba(0, 0, 0, 0.5);
    border: none;
    color: white;
    padding: 0.5rem;
    cursor: pointer;
  }
  .carousel {
    position: relative;
    height: 30rem;
    width: 90%;
    overflow: hidden;
    /* margin: 2rem; */
  }

  .carousel img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: opacity 1s ease-in-out;
    position: absolute;
    top: 0;
    left: 0;
  }

  .carousel img.hidden {
    opacity: 0;
  }

  .carousel img.visible {
    opacity: 1;
  }
</style>
