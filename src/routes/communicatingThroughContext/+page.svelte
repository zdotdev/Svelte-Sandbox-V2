<script>
    import {setContext} from 'svelte';
    import Parent from './parent.svelte';
    
    // this wont work
    // let color = 'red'; 

    // setContext('color', color);

    // but if we use object, it will work
    let color = {color: 'green'};

    setContext('color', color);

    function changeColor(){
        console.log(color.color);
    }
</script>
<div>
    <p>Communicating through content is a method of passing data from multiple context. Changing the color variable automatically is imposible, 
        because even if you update the value of the data, the element that use the context will not be updated but the value of the data will 
        be updated. To fix this, we must destroy and createe the element again, and in this example, i use the key block.
    </p>
    <div>
        <label>
            <input type="color" bind:value="{color.color}">{color.color}
        </label>
        {#key color.color}
            <Parent on:click={changeColor}/>    
        {/key}
    </div>
</div>