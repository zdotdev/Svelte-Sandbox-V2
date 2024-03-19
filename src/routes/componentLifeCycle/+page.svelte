<script>
    import Component from "./component.svelte";
    let checked;
</script>

<main class="m-4">
    <p>Component life cycle is about the existence of the element. First is the onMount which is triggered when 
        the element is added or created to the dom. Second is the beforeUpdate which is triggered before the element 
        is updated. Third is the afterUpdate which is triggered after the element is updated. Lastly is the onDestroy
        which is triggered when the element is removed from the dom.
    </p>
    <div class="flex items-center gap-2">
        <input type="checkbox" bind:checked>
        {#if checked}
            <Component />    
        {/if}
    </div>
</main>