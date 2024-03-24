<script>
    import {setContext} from "svelte";
    import Child from "./child.svelte";
    import Child2 from "./child2.svelte";
    import Child3 from "./child3.svelte";
    let color = 'red'
    // using data from .js as a context
    import { key } from './context'
    setContext('color', 'red')
    setContext('key', key)
</script>

<p>Parent:</p>
<!-- this is the primitive value that we want to pass to the children -->
<!-- <Child {color}/> -->
<!-- <Child2 {color}/> -->

<!-- Using setContext -->
<div class="m-4">
    <p>Using primitive props value:</p>
    <Child {color}/>
</div>
<div class="m-4">
    <p>Using setContext to access a props value:</p>
    <Child2/>
</div>
<div class="m-4">
    <p>Using .js data as a context value:</p>
    <Child3/>
</div>