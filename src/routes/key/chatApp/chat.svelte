<script>
    import { fetchChat } from './data.js'
    export let friend

    $: name = friend.name
    
    $: reset(name)

    function reset(_){
        message = ''
        loadingChat(name)
    }
    let message = ''

    let chats = []
    let loading = false

    async function loadingChat(name){
        loading = true
        chats = await fetchChat(name) 
        loading = false
    }
</script>
<div>
    <div>
        <div>
            {#if loading}
                <p>Loading...</p>
            {:else}
                <ul>
                    {#each chats as chat}
                        <li>{chat}</li>
                    {/each}
                </ul>
            {/if}
        </div>
        <input bind:value={message}>
    </div>
</div>