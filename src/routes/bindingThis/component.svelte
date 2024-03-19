<svelte:options accessors/>
<script>
    export let num = 0 // export the variable to be used in the parent component

    export function reset(){
        num = 0
    }

</script>

<div class="p-2 m-2">
    <p>{num}</p>
</div>