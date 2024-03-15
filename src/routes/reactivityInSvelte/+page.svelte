<script>
    let arr = [];
    $: len = arr.push(0)
    const obj = {
        number: 0
    }

    let num = 0

</script>

<div>
  <p>Reactivity in Svelte is the method of updating the value of an object, array, or variable.</p>
  <div class="p-4 m-4 outline outline-2 w-fit flex flex-col gap-2 items-center">
    <p>{arr.length - 1}</p>
    <button on:click={() => {arr.foo = 1}} class="bg-slate-200 p-2 rounded-lg">Add Array</button>
  </div>
  <div class="p-4 m-4 outline outline-2 w-fit flex flex-col gap-2 items-center">
    <p>{obj.number || 0}</p>
    <button on:click={() => {obj.number++}} class="bg-slate-200 p-2 rounded-lg">Increment Object Value</button>
  </div>
  <div class="p-4 m-4 outline outline-2 w-fit flex flex-col gap-2 items-center">
    <p>{num || 0}</p>
    <button on:click={() => {num++}} class="bg-slate-200 p-2 rounded-lg">Increment Variable</button>
  </div>
</div>
