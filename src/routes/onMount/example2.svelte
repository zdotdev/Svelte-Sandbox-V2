<script>
    import {onMount} from "svelte";
    let src

    /* However, when it comes to server-side rendering (SSR), onMount does not run. 
    This is because server-side rendering generates static HTML at build time, and there's 
    no actual DOM or browser environment involved. */

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