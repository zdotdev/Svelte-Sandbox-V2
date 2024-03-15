<script>
    let num = 0
</script>
<button on:click={() => {num++}} class="bg-blue-200 rounded-lg p-2 w-fit">
    {#if num < 2}
        Count: 
    {:else if num >=2 }
        Counts: 
    {/if}
    {num}
</button>