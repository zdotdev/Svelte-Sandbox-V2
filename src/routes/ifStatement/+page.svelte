<script>
    let statusOne = true;
    let statusTwo = true;
</script>

<div class="flex flex-col gap-2 items-center m-4">
    <p>If statement</p>
    {#if statusOne}
        <button on:click={() => {statusOne = !statusOne}} class="bg-green-200 p-2 rounded-lg w-fit">Button 1: {statusOne}</button>
        {:else}
        <button on:click={() => {statusOne = !statusOne}} class="bg-red-200 p-2 rounded-lg w-fit">Button 1: {statusOne}</button>
    {/if}
    {#if statusTwo}
        <button on:click={() => {statusTwo = !statusTwo}} class="bg-green-200 p-2 rounded-lg w-fit">Button 1: {statusTwo}</button>
        {:else}
        <button on:click={() => {statusTwo = !statusTwo}} class="bg-red-200 p-2 rounded-lg w-fit">Button 1: {statusTwo}</button>
    {/if}
</div>