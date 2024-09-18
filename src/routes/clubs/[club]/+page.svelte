<script>
    export let data;
</script>
<main>
    <h1>About Us</h1>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt placeat nihil repudiandae saepe ea accusantium quisquam consequatur voluptas velit error vel amet, ad fugiat? Ab dolores neque nostrum quia deleniti saepe pariatur? Vitae aspernatur modi optio sint recusandae obcaecati nobis doloribus eveniet nihil magni, consequatur distinctio accusamus quos unde soluta minus assumenda placeat enim tenetur non perferendis fuga ut! Architecto possimus non odit est voluptatem rem. Fugit, aperiam. Consectetur minus alias, odit, suscipit voluptatem reprehenderit architecto delectus rerum animi doloribus, neque sint. Blanditiis eveniet voluptatibus soluta eius libero, consequatur, hic ut molestiae dicta ea ratione veniam modi sit debitis vel?</p>
    <div class="secretaries">
        <div class="sec">
            <figure>
                <img src="https://www.actuia.com/wp-content/uploads/2019/07/sam-altman.jpg" alt="Technical Secretary">
                <figcaption>Technical Affairs Seceretary</figcaption>
            </figure>
        </div>
        <div class="dsec">
            <figure>
                <img src="https://www.actuia.com/wp-content/uploads/2019/07/sam-altman.jpg" alt="Deputy Technical Secretary">
                <figcaption>Deputy Technical Affairs Seceretary</figcaption>
            </figure>
        </div>
    </div>
    <h1>Contact Us</h1>
    <p>You can contact us at the following links</p>
    <p>Email:
        <a href="mailto:sec_tech@iitpkd.ac.in">sec_tech@iitpkd.ac.in</a>
    </p>
    <p>Instagram:
        <a href="https://www.instagram.com/tech.iitpkd">@tech.iitpkd</a>
    </p>
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