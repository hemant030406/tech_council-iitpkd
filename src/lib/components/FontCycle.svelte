<script>
    export let text;
</script>
<span>{text}</span>

<style>
    @keyframes fontcycle {
        0% {
            font-family: 'Courier New', Courier, monospace;
        }
        20% {
            font-family: 'Roboto'
        }
        40% {
            font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        }
        60% {
            font-family: 'Times New Roman', Times, serif;
        }
        80% {
            font-family: monospace;
        }
    }
    span {
        animation: fontcycle 4s linear 0s infinite;
    }
</style>