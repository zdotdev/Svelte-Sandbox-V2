<script>
    export let compValue
</script>

<div class="flex flex-col gap-2 m-4">
    <p>Component Value Binding:</p>
    <input type="text" bind:value={compValue} class="outline outline-2 w-fit">
    <p>Value = {compValue}</p>
    <button on:click={() => {compValue = "Component Lamaw"}} class="bg-slate-200 rounded-lg p-2 w-fit">Change Value</button>
</div>