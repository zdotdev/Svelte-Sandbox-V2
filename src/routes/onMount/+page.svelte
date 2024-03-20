<script>
    import Example1 from "./example1.svelte";
    import Example2 from "./example2.svelte";

    let show = false

</script>
<div class="flex flex-col items-center m-4">
    <p>onMount can also be used in different ways. Always use clean up when using onMount to prevent memory leaks.</p>
    <input type="checkbox" bind:checked={show}>

    {#if show}
        <Example1 />
        <Example2 />
    {/if}
</div>