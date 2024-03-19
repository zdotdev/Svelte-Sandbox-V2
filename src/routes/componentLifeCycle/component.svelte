<script>
    import { onMount, beforeUpdate, afterUpdate, onDestroy } from 'svelte';
    import ComponentLifeCycle from './component';
    const action = ComponentLifeCycle();

    onMount(() => { /* When the component is first rendered and inserted into the DOM, the onMount function is executed. 
        This is a good place to perform any initialization tasks or set up event listeners that are specific to the component. */
        console.log('Component Mounted');
    });

    onDestroy(() => {
        console.log('Component Destroyed');
    })

    beforeUpdate(() => {
        console.log('Component Before Update');
    });

    afterUpdate(() => {
        console.log('Component After Update');
    }); 

    let count = 0;

</script>

<button use:action on:click={() => {count++}} class="bg-slate-200 rounded-lg p-2">Increment: {count}</button>