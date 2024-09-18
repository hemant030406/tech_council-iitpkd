<script>
    // @ts-nocheck
    import Club from "./cmpt.svelte";
    // import logo from "$lib/assets/logo.png";
    // import logo from "$lib/assets/logo.png";
    import cognifai from "$lib/assets/cognifai.png";
    import finance from "$lib/assets/finance.png";
    import robotics from "$lib/assets/robotics.png";
    import yacc from "$lib/assets/yacc.png";
    import stellar from "$lib/assets/stellar.png";
    import ydyuthi from "$lib/assets/ydyuthi.png";
    // const images = [cognifai, finance, robotics, yacc, stellar, ydyuthi];
    const clubs = {
        cognifai: cognifai,
        finance: finance,
        robotics: robotics,
        yacc: yacc,
        stellar: stellar,
        ydyuthi: ydyuthi,
    };
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
                class={`club ${i}`}
                style="
          transform: rotate({i * 60}deg) translateY(280%) rotate(-{i * 60}deg);
          position: absolute;
        "
            >
                <Club
                    label={Object.keys(clubs)[i]}
                    image={clubs[Object.keys(clubs)[i]]}
                />
            </div>
        {/each}
    </div>
</div>

<style>
    .container {
        /* width: 100vw; */
        height: 90vh;
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
        transition: all 0.2s ease-in-out;
        animation: scatter 1s ease-in-out forwards;
        cursor: pointer;
    }

    @keyframes scatter {
        0% {
            transform: rotate(0deg);
        }
    }

    @media (max-width: 600px) {
        .card {
            height: 80%;
        }
    }
    @media (min-width: 700px) {
    }
</style>
