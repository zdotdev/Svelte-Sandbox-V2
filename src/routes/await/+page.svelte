<script>
    let selectBreed = 'african'
    let breeds = ['affenpinscher', 'african', 'airedale']
    let dogImage
    let isLoading = false

    /* hard way */
    async function fetchDog(breed){
        isLoading = true
        try{
            const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
            const data = await res.json()
            dogImage = data.message
        }catch(err){
            console.log(err);
        }finally{
            isLoading = false
        }
    }
    $: fetchDog(selectBreed)

    async function returnBreed(breed){
        const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
        const data = await res.json()
        return data
    }
    $: proms = returnBreed(reselectBreed) // optional but suggested
    let reselectBreed = 'airedale'
</script>
<main>
    <div class="flex flex-col items-center">
        <p>Complicated way of fetching and processing data:</p>
        <div class="flex flex-col items-center">
            <select bind:value={selectBreed}>
                {#each breeds as breed}
                    <option value="{breed}" selected={selectBreed}>{breed}</option>
                {/each}
            </select>
            <div class="flex flex-col items-center m-8">
                <p>Selected breed: {selectBreed}</p>
                <div>
                    {#if isLoading}
                        <p>Loading...</p>
                    {:else}
                        <img src="{dogImage}" alt="dog" class="w-80 h-80">
                    {/if}
                </div>
            </div>
        </div>
    </div>
    <div class="flex flex-col items-center">
        <p>Using #await block:</p>
        <div class="flex flex-col items-center">
            <select bind:value={reselectBreed}>
                {#each breeds as breed}
                <option value="{breed}" selected={reselectBreed}>{breed}</option>
                {/each}
            </select>
            <div class="flex flex-col items-center m-8">
                <p>Selected breed: {reselectBreed}</p>
                <div>
                    {#await proms}
                        <p>Loading...</p>
                    {:then res}
                        <img src="{res.message}" alt="dog" class="w-80 h-80">
                    {:catch error}
                        <p>Oopxs, something went wrong</p>
                    {/await}
                </div>
            </div>
        </div>
    </div>
</main>