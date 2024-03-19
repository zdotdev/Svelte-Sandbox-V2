<script>
    let data = new Set();

    function handleClick() {
        data.add([1, 2, 3]);
    }

    function handleLog() {
        console.log(Array.from(data)[0][1]);
    }
</script>

<button on:click={handleClick}>Click</button>
<button on:click={handleLog}>Log</button>
