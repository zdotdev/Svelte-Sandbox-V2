<script>
    import {getContext} from "svelte";
    // export let color

    let color = getContext('color') // Access the context value from the parent
</script>
<p>Child2: {color}</p>