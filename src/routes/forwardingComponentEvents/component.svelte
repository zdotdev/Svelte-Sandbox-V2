<script>
    import {createEventDispatcher} from 'svelte'

    const dispatch = createEventDispatcher()

    $: dispatch('dataChange', num)

    let num = 1
</script>
<div class="flex flex-col items-center">
    <p>{num}</p>
    <button on:click={() => {num++}} class="bg-slate-200 p-2 rounded-lg">Click me</button>
</div>