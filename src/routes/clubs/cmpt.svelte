<script>
    export let label = '';
    export let image = ''; // optional image prop
</script>
  
  <div class="club">
    {#if image}
      <img src={image} alt={label} />
    {:else}
      <span>{label}</span>
    {/if}
  </div>
  
  <style>
    .club {
      width: 14vw;  /* 30% of the viewport width */
        height: 14vw; /* Keep it proportional to width for a circle */
        max-width: 160px; /* Maximum size of the circle */
        max-height: 160px;
        min-width: 80px; /* Minimum size of the circle */
        min-height: 80px;
      border-radius: 50%;
      background-color: #0a0a0a;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      color: white;
      font-size: 18px;
      position: absolute;
      overflow: hidden;
    }
  
    .club img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      object-fit: cover;
    }
  </style>
  