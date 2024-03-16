<script>
    // import {createEventDispatcher} from 'svelte'
    // const dispatch = createEventDispatcher()
    import Child from './child.svelte'

    // function toMain(event){
    //     dispatch('passData', event.detail)
    // }
</script>
<!-- <Child on:passData={toMain}/> -->
<Child on:passData/>