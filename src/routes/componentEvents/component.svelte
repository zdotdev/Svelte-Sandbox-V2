<script>
    export let valueCheck = () => {} // adding default value to the function to call it even without passing a props
    let num = 0
</script>
<div>
    <p>{valueCheck(num) || ''}</p>
    <div class="flex gap-4 items-center">
        <button on:click={() => {if(num > 0){num--}}} class="bg-slate-200 p-2 rounded-lg h-fit">-</button>
        <p>{num}</p>
        <button on:click={() => {num++}} class="bg-slate-200 p-2 rounded-lg h-fit">+</button>
    </div>
</div>