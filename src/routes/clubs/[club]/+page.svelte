<script>
    export let data;
</script>

<main>
<div class="club">
    <div class="clublogo" style="background-image: url({data.logo})"></div>
    <div class="clubdesc">
    <h1 style="margin: 0;">{data.name}</h1>
    <h3 style="margin: 0;">{data.title}</h3>
    </div>
</div>
    <p style="padding-inline: 1.5rem;">{data.content}</p>
    <h2>Club Heads</h2>
    <div class="secretaries">
        {#each data.heads as head}
            <div class="sec">
                <figure>
                    <img
                        src={head.image}
                        alt="{data.name} Secretary"
                    />
                    <figcaption>{head.name}</figcaption>
                </figure>
            </div>
        {/each}
    </div>
</main>

<style>
    main {
        --w: 70%;
        width: var(--w);
        margin-left: calc((100% - var(--w)) / 2);
        margin-top: 2rem;
    }
    .club{
        display: flex;
        gap: 1rem;
        align-items: center;
    }
    .clublogo {
        height: 4rem;
        /* width: 4rem; */
        aspect-ratio: 1;
        background-size: cover;
        background-position: center;
        border-radius: 50%;
    }
    img {
        width: 15rem;
        aspect-ratio: 1;
        border-radius: 100vh;
        object-fit: cover;
    }
    .secretaries {
        display: flex;
        width: 100%;
        justify-content: center;
    }

    h2 {
        width: 100%;
        text-align: center;
    }
    figure {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: min-content;
        text-align: center;
    }
    figcaption {
        margin-top: 1em;
        font-weight: bold;
    }
    /* a {
        color: rgb(178, 178, 255);
    } */
</style>
