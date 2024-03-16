<script>
    // import {createEventDispatcher} from 'svelte'
    // const dispatch = createEventDispatcher()
    import Grandchild from './grandchild.svelte'
    // function toParent(event){
    //     console.log(event.detail);
    //     dispatch('passData', event.detail)
    // }
</script>

<!-- <Grandchild on:passData={toParent}/> -->
<Grandchild on:passData/> <!-- this is a shorthand of passing the same event from the grand chilf to the main page -->