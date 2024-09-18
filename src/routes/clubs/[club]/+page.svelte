<script>
    export let data;
</script>

<main>
    <h1>{data.name}</h1>
    <h3>{data.title}</h3>
    <p>{data.content}</p>
    <h2>Club Heads</h2>
    <div class="secretaries">
        {#each data.heads as head}
            <div class="sec">
                <figure>
                    <img
                        src="https://www.actuia.com/wp-content/uploads/2019/07/sam-altman.jpg"
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
    }
    img {
        width: 15rem;
        aspect-ratio: 1;
        border-radius: 100vh;
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
    a {
        color: rgb(178, 178, 255);
    }
</style>
