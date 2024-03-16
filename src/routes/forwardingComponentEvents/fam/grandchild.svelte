<script>
    // passing data from grandchild to child
    import {createEventDispatcher} from 'svelte'
    const dispatch = createEventDispatcher()
    function disp(event){
        dispatch('dataChange', event.target.dataset.value)
    }
</script>
<div on:click={disp}>
    <button data-value='A' class="bg-slate-200 p-2 rounded-lg">A</button>
    <button data-value='B' class="bg-slate-200 p-2 rounded-lg">B</button>
</div>