<script>
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()

    function toChild(event){
        dispatch('passData', event.target.dataset.value)
    }
</script>
<div on:click={toChild}>
    <button data-value='C' class="bg-slate-200 p-2 rounded-lg">C</button>
    <button data-value='D' class="bg-slate-200 p-2 rounded-lg">D</button>
</div>