<script>
    import {getContext} from 'svelte';
    let color = getContext('color');
    let click = getContext('click');
</script>
<div class="flex gap-2 items-center">
    <p>Child2: {color.color}</p>
    <button on:click={click} class="bg-slate-200 rounded-lg p-2">Click me</button>
</div>