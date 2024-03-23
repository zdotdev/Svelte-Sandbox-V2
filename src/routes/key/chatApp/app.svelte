<script>
    import Chat from "./chat.svelte";

    const friends = [
        {name: "Diego"},
        {name: "Kamote"},
        {name: "Kamatis"},
        {name: "Kambing"},
        {name: "Kambal"}
    ]

    let selectedFriend = friends[2];
</script>
<div>
    <ul class="m-4 flex flex-col gap-4 w-fit">
        {#each friends as friend}
            <li>
                <label class:selected={selectedFriend === friend} class="p-2 text-2xl">
                    <input type="radio"
                    value={friend}
                    bind:group={selectedFriend}>
                    {friend.name}
                </label>
            </li>
        {/each}
    </ul>
    <div>
        <p class="text-lg font-bold">Chats of {selectedFriend.name}:</p>
        {#key selectedFriend}
            <Chat friend={selectedFriend} />
        {/key}
    </div>
</div>

<style>
    .selected {
        background-color: #f0f0f0;
    }
    input{
        display: none;
    }
</style>