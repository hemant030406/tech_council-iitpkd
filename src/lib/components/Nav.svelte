<script lang="ts">
    import logo from "$lib/assets/sacLogo.png";
    import { onMount } from "svelte";
    var ele: HTMLElement;
    const handleClick = (e: Event) => {
        let others = document.getElementsByTagName("a");
        for (let i = 0; i < others.length; i++) {
            (others[i] as HTMLElement).style.backgroundColor = "#323232";
        }
        ele = e.target as HTMLElement;
        if (ele.classList[0] != "logo-container") {
            ele.style.backgroundColor = "#3199c0";
        }
    };
    onMount(() => {
        let url = window.location.pathname.slice(1);
        let ele = document.querySelector(`.${url}`) as HTMLElement;
        ele.style.backgroundColor = "#3199c0";
    });
</script>

<div class="navholder">
    <div class="navbar">
        <a href="/" class="logo" on:click={handleClick}>
            <div
                class="logo-container"
                style="background-image: url({logo});"
            ></div>
        </a>
        <a href="/clubs" class="clubs" on:click={handleClick}>Clubs</a>
        <a
            href="/upcoming_events"
            class="upcoming_events"
            on:click={handleClick}>Upcoming Events</a
        >
        <a href="/contact_us" class="contact_us" on:click={handleClick}
            >Contact Us</a
        >
    </div>
</div>

<style>
    a {
        padding: 0.5rem;
        border-radius: 15px;
    }
    .navholder {
        display: flex;
        justify-content: center;
        font-weight: 500;
    }
    .navbar {
        display: flex;
        align-items: center;
        width: fit-content;
        background: #323232;
        color: white;
        border-radius: 35px;
    }
    .navbar a {
        text-decoration: none;
        color: white;
        margin: 1rem;
    }
    .logo-container {
        background-size: contain;
        background-position: center;
        background-repeat: no-repeat;
        width: 2rem;
        height: 2rem;
    }
</style>
