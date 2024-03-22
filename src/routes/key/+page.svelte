<script>
    import {fade} from 'svelte/transition';
    let count = 0
</script>

<div>
    {#key count}
        <p in:fade>Everytime that the variable or an element is updated or edited, the element inside the key will be recreated as 
            well. The #key block in Svelte is used to optimize the rendering of elements within a loop or conditional block. 
            It helps Svelte efficiently update and manage the DOM by identifying which elements need to be created, updated, 
            or removed when the underlying data changes.
        </p>
    {/key}
    {#key count}
        <input type="text" class="outline outline-2">
    {/key}
    <button on:click={() => {count++}} class="bg-slate-200 rounded-lg p-2">{count}</button>
</div>