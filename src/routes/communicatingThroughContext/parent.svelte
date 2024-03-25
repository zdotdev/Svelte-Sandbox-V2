<script>
    import Child1 from './child1.svelte';
    import Child2 from './child2.svelte';

    let checked = true
</script>

<div>
    <label for="">
        <input type="checkbox" bind:checked>show
    </label>
    <p>parent</p>
    {#if checked}
        <div class="m-4 flex flex-col gap-4">
            <Child1 on:click/>
            <Child2 on:click/>
        </div>
    {/if}
</div>