<script>
    import {onMount} from "svelte";
    let src
    onMount( async () => {
        const controller = new AbortController();
        const signal = controller.signal;
        
        const data = await fetch("https://dog.ceo/api/breeds/image/random", {signal});
        const dog = await data.json()
        src = dog.message
        
        return () => {
            controller.abort()
        }
    })
</script>
<img {src} alt="dog" class="w-80 h-80">