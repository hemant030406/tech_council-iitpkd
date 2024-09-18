<script>
	import logo from "$lib/assets/sacLogo.webp";
	import EventCard from "$lib/components/EventCard.svelte";
	import cardLogo from "$lib/assets/freshman.webp";
	import cornerLogo from "$lib/assets/clubLogo.webp";
	const events = [
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
		{
			cardLogo: cardLogo,
			cornerLogo: cornerLogo,
			date: "17 Aug",
		},
	];
</script>

<div class="main">
    <div class="header">
        <!-- <div class="logo" style="background-image: url({logo});"></div> -->
        <div class="text">
            <h1><span class="golden">Tech</span>nical Council</h1>
            <p>Indian Institute of Technology, Palakkad</p>
        </div>
    </div>
    <div class="events">
        {#each events as e}
            <EventCard
                logo={e.cardLogo}
                cornerLogo={e.cornerLogo}
                date={e.date}
            />
        {/each}
    </div>
</div>

<style>
    .golden {
        background-color: rgb(255, 255, 255);
        border-radius: 0.1em;
        padding-inline: 0.1em;
        color: black;
        background-size: 19.2px 19.2px;
        background-image: linear-gradient(to right, grey 1px, transparent 1px),
            linear-gradient(to bottom, grey 1px, transparent 1px);
    }
    .events {
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        gap: 2rem;
        position: relative;
    }
    .main {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    .header {
        display: flex;
        flex-direction: row;
        justify-content: center;
        gap: 1rem;
        align-items: center;
    }
    .text {
        width: max-content;
        text-align: center;
    }
    .logo {
        background-size: contain;
        background-position: center;
        width: 15rem;
        height: 15rem;
        background-repeat: no-repeat;
    }
    h1 {
        margin: 0;
        font-size: 9vw;
        margin-top: 4vw;
        margin-bottom: 4vw;
        line-height: 1;
    }
    .text > p {
        font-size: 24px;
        letter-spacing: 0.05em;
    }
    @media (max-width: 650px) {
        h1 {
            font-size: 250%;
            width: 50%;
        }
        .logo {
            width: 10rem;
            height: 10rem;
        }
    }
    @media (max-width: 500px) {
        h1 {
            font-size: 170%;
            width: 50%;
        }
        .logo {
            width: 8rem;
            height: 8rem;
        }
    }
</style>
