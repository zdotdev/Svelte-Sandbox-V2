<script>
    import {update} from './data'
</script>

<div>
    <input type="text" on:input={(event) => {update(event.currentTarget.value)}} class="outline outline-2">
</div>