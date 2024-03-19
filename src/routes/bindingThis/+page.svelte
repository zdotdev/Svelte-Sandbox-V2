<script>
    import Component from "./component.svelte";
    let inputElement;

    function handleClick() {
        inputElement.value = '';
    }

    let component

    const must = "<svelte:options accessors/>"
</script>

<div class="m-4">
    <p>Bind:This is a method of binding element to a variable.</p>
    <div class="flex gap-2 items-center">
        <input type="text" bind:this={inputElement}  class="outline outline-2 h-fit" />
        <button class="bg-slate-200 rounded-lg p-2 h-fit" on:click={handleClick}>Clear</button>
    </div>
</div>
<p>To use and manipulate data directly from Component, you must use <strong>{must}</strong> element</p>
<Component bind:this={component}/>
<button on:click={() => {component.num++}} class="bg-slate-200 rounded-lg p-2 m-2">Increment component num value</button>
<button on:click={component.reset} class="bg-slate-200 rounded-lg p-2 m-2">Reset</button>