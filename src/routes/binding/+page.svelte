<script>
    import Component from "./component.svelte";
    let valOne = ''
    function inputVal() {
        valOne = this.value
    }

    let newValue = ''

    let value = ''

    let compValue = ''
</script>

<div class="flex flex-col gap-2 m-4">
    <p>Withou using Bind:</p>    
    <input type="text" on:input={inputVal} value = {valOne} class="outline outline-2 w-fit" />
    <p>Value = {valOne}</p>
    <button on:click={() => {valOne = "Lamaw"}} class="bg-slate-200 rounded-lg p-2 w-fit">Change Value</button>
</div>
<div class="flex flex-col gap-2 m-4">
    <p>Using Bind:</p>    
    <input type="text" bind:value = {newValue} class="outline outline-2 w-fit" />
    <p>Value = {newValue}</p>
    <button on:click={() => { newValue = "New Lamaw" }} class="bg-slate-200 rounded-lg p-2 w-fit">Change Value</button>
</div>
<div class="flex flex-col gap-2 m-4">
    <p>Shorthand for Bind:</p>    
    <input type="text" bind:value class="outline outline-2 w-fit" />
    <p>Value = {value}</p>
    <button on:click={() => { value = "Shorthand Lamaw" }} class="bg-slate-200 rounded-lg p-2 w-fit">Change Value</button>
</div>
<Component {compValue} />
<button on:click={() => {compValue = 'Change by parent'}} class="bg-slate-200 rounded-lg p-2 w-fit">Change Component Value</button>