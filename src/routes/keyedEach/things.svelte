<script>
    const emojis = {
        apple: '🍎',
        banana: '🍌',
        carrot: '🥕',
        donut: '🍩',
        egg: '🥚'
    }

    export let name
    const emoji = emojis[name] // i use squarebracket to access the object using the name prop
    // $: emoji = emojis[name] // you can also use this syntax and remove the thing.id in the +page.svelte
</script>

<p>{emoji} : {name}</p>