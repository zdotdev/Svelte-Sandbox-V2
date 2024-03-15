<script>
    let number
</script>
<p>You can add multiple events in an element by adding "|" afeter the main event like on:click. You can check this 
    <a href="https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener" class="font-bold">link</a>
     for more events.</p>
<div class="outline outline-2 w-fit p-4 flex flex-col gap-2 items-center">
    <p>{number || ''}</p>
    <button on:click|preventDefault|stopPropagation={() => {number = 'Clicked'}} class="bg-pink-200 p-2 rounded-lg">Click me</button>
</div>