<script lang="ts">
    import logo from "$lib/assets/logo.png";
    import mainImage from "$lib/assets/img1.png";
    import cornerImage from "$lib/assets/img2.png";
</script>

<div class="card">
    <div class="top-left-corner-logo">
        <div class="logo" style="background-image: url({cornerImage});"></div>
        <div class="date">17 Aug</div>
    </div>
    <div class="crd">
        <div class="inner-card" style="background-image: url({mainImage});"></div>
    </div>
    <div class="bottom-right-corner-logo">
        <div class="logo" style="background-image: url({cornerImage});"></div>
        <div class="date">17 Aug</div>
    </div>
</div>

<style>
    .date {
        text-align: center;
        margin-top: 0.2rem;
    }
    .top-left-corner-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 2rem;
    }
    .bottom-right-corner-logo {
        display: flex;
        flex-direction: column;
        align-items: center;
        transform: rotate(180deg);
        flex: 1;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        width: 2rem;
    }
    .card {
        display: flex;
        background-color: black;
        width: fit-content;
        height: fit-content;
        padding: 0.5rem;
        border: 2px solid #554b87;
        border-radius: 10px;
        margin-top: 4rem;
    }
    .crd {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 12rem;
        height: 18rem;
        padding: 2rem 0;
    }
    .logo {
        width: 2rem;
        height: 2rem;
        background-size: contain;
        background-position: center;
        border-radius: 100%;
    }
    .inner-card {
        background-size: contain;
        background-position: center;
        width: 100%;
        height: 100%;
        background-repeat: no-repeat;
        /* border: 1.5px solid #554b87; */
        border-radius: 10px;
    }
</style>
