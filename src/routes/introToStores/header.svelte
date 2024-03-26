<script>
    import {value, subscribe} from './data'
    
    let val = value
    subscribe(() => {
        val = value
    })
</script>
<p>Value: {val}</p>