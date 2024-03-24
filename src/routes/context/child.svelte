<script>
    import Grandchild from "./grandchild.svelte";
    export let color
</script>

<p>Child: {color}</p>
<Grandchild {color}/>