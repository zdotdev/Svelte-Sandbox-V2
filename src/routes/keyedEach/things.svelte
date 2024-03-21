<script>
    const emojis = {
        apple: '🍎',
        banana: '🍌',
        carrot: '🥕',
        donut: '🍩',
        egg: '🥚'
    }

    export let name
    const emoji = emojis[name] // i use curlybracket to access the object using the name prop
</script>

<p>{emoji} : {name}</p>