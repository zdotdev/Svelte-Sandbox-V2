<svelte:options accessors/>
<script>
    export let num = 0 // export the variable to be used in the parent component

    export function reset(){
        num = 0
    }

</script>

<div>
    <p>{num}</p>
</div>