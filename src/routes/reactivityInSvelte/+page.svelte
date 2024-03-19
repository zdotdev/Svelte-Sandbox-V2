<script>
    let arr = []
    const obj = {
        number: 0
    }

    let num = 0

    /* what happened here is that we are not updating the value of the array, 
    we are creating a new array and assigning it to the variable arr */
    function addToArray() {
        arr = [...arr, 1];
    }
</script>

<div>
  <p>Reactivity in Svelte is the method of updating the value of an object, array, or variable.</p>
  <div class="p-4 m-4 outline outline-2 w-fit flex flex-col gap-2 items-center">
    <p>{arr.length}</p>
    <button on:click={addToArray} class="bg-slate-200 p-2 rounded-lg">Add Array</button>
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
