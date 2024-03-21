<script>
    import Things from "./things.svelte";
    let things = [
        { id: 1, name: "apple"},
        { id: 2, name: "banana"},
        { id: 3, name: "carrot"},
        { id: 4, name: "donut"},
        { id: 5, name: "egg"}
        ]
    let text = '<Thing>'
</script>

<div class="flex flex-col gap-2 items-center m-4">
    <p>By default, when you modify the value of an each block, it will add and remove DOM nodes at the end of the block,
         and update any values that have changed. That might not be what you want.</p>
         <p>The {text} component sets the emoji as a constant on initialization, but the name is passed in via a prop.</p>
         <p>Click the 'Remove first thing' button a few times, and notice what happens:</p>
    <button on:click={() => { things = things.splice(1) }} class="bg-slate-200 p-2 rounded-lg">Splice</button>
    {#each things as thing}
        <Things name = {thing.name}/>
    {/each}
    <p>1. It removes the last component.</p>
    <p>2. It then updates the name value in the remaining DOM nodes, but not the emoji, which is fixed when each {text} is created.</p>
    <p>Instead, we'd like to remove only the first {text} component and its DOM node, and leave the others unaffected.</p>
    <button on:click={() => { things = things.splice(1) }} class="bg-slate-200 p-2 rounded-lg">Splice</button>
    {#each things as thing (thing.id)}
        <Things name = {thing.name}/>
    {/each}
    <p>Here, (thing.id) is the key, which tells Svelte how to figure out what to update when the values (name in this example) change.</p>
</div>