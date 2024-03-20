<script>
    const arr = ['yellow', 'green', 'blue', 'red', 'purple'];
    const obj = {
        name: 'Zedrick',
        age: 21,
        job: 'Software Engineer'
    }
    const section = ['section 1', 'section 2', 'section 3', 'section 4', 'section 5'];
</script>

<div class="flex flex-col gap-4 items-center m-4">
    <p>Each array statement</p>
    <ul class="flex flex-col gap-2">
        {#each arr as color}
            <li class="text-{color}-500 font-bold">{color}</li>
        {/each}
    </ul>
    <p>Each object statement</p>
    <ul class="flex flex-col gap-2 items-center">
        {#each Object.values(obj) as person}
            <li>{person}</li>
        {/each}
    </ul>
    <p>Each object statement with index</p>
    <ul class="flex flex-col gap-2 items-center">
        {#each section as section, index}
            <li>{section}, Index: {index}</li>
        {/each}
    </ul>
</div>