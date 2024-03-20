<script>
    /* The code starts by importing the onMount function from the "svelte" package. 
    The onMount function is a lifecycle function provided by Svelte that runs when the 
    component is first rendered to the DOM. */
    import {onMount} from "svelte";
    let count = 0

    onMount(() => {
        let interval = setInterval(() => { // used to increment the value of count every second
            count++
        }, 1000)
        return () => {
            clearInterval(interval) /* used to clear the interval when the component is 
            destroyed to prevent memory leaks. It is triggered automatically when the element is unmounted */
        }
    })
</script>

<p>{count}</p>