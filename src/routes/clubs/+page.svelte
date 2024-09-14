<script>
  import Club from './cmpt.svelte';
  // import logo from "$lib/assets/logo.png";
  // import logo from "$lib/assets/logo.png";
  import image3 from "$lib/assets/image3.png";
  import image4 from "$lib/assets/image4.png";
  import image5 from "$lib/assets/image5.png";
  import image6 from "$lib/assets/image6.png";
  import image7 from "$lib/assets/image7.png";
  import image8 from "$lib/assets/image8.png";
  const images = [image3, image4, image5, image6, image7, image8];
</script>

<div class="container">
  <!-- Card Wrapper -->
  <div class="card">
    <!-- Central Club -->
    <div class="center-club">
      <div class="text">CLUB</div>
    </div>
    <!-- Circular components around the central club -->
    {#each Array(6) as _, i}
      <div
        class="club"
        style="
          transform: rotate({i * 60}deg) translateY(280%) rotate(-{i * 60}deg);
          position: absolute;
        "
      >
        <Club label={`Club ${i + 1}`} image={images[i]} />
      </div>
    {/each}
  </div>
</div>

<style>
  
  .container {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    /* align-items: center; */
  }

  
  .card {
   
    position: relative;
    width: 100vw; 
    height: 100%; 
    /* max-width: 500px; */
    /* max-height: 500px; */
    
    display: flex;
    justify-content: center;
    align-items: center;
  }

  
  .center-club {
    width: 19vw; 
    height: 19vw;
    max-width: 230px;
    max-height: 230px;
    min-width: 100px;
    min-height: 100px;
    background-color: lightblue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    /* border: 5px solid red; */
    position: relative;
    z-index: 2; 
  }

  
  .text {
    font-size: calc(2vw + 10px); 
    color: rgb(8, 8, 8);
  }

  
  .club {
    width: 10vw; 
    height: 10vw;
    max-width: 100px;
    max-height: 100px;
    min-width: 50px;
    min-height: 50px;
    background-color: skyblue;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 2px solid darkblue;
    position: absolute;
    z-index: 1; 
  }

  @media (max-width: 600px) {
    .card {
       height: 80%;
    }
  }
  @media (min-width: 700px){
    
  }
</style>
