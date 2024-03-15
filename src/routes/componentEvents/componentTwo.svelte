<script>
    import { createEventDispatcher } from 'svelte' /* event dispatcher allows you to create a custon naming for an 
    event */

    const dispatch = createEventDispatcher() // instantiate the eventDispatcher

    let data = 0
    $: dispatch('dataChange', data) /* I use reactive declaration to monitor the changes of the value of data. Event dispatcher takes 2 
    parameter, one for the event name and one for the data to pass */
</script>
<button on:click={() => {data++}} class="bg-slate-200 p-2 rounded-lg w-fit">Switch</button>