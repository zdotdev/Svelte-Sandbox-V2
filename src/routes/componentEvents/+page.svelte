<script>
    import Component from "./component.svelte";
    import ComponentTwo from "./componentTwo.svelte";

    function valueCheck(event){
        if(event > 3){
            return 'greater than 3'
        }else{
            return 'less than 3'
        }
    }
    let data = 'off'
    function eventDispatch(event){
        if(event.detail % 2 == 0){
            data = 'on'
        }else{
            data = 'off'
        }
    }

</script>
<div>
    <p>Passing a function to a component:</p>
    <div class="p-4">
        <p>With a funcion as props:</p>
        <Component {valueCheck}/>
    </div>
    <div class="p-4">
        <p>Without a function as props</p>
        <Component />
    </div>
</div>
<div class="p-4 flex flex-col">
    <p>Passing an event and using createEventDispathcer to make a custom event</p>
    <p class="flex my-4 items-center gap-2">State: 
        {#if data === 'on'}
            <span class="bg-green-500 text-white p-4 rounded-lg">{data}</span>
        {:else if data === 'off'}
            <span class="bg-red-500 text-white p-4 rounded-lg">{data}</span>
        {/if}    
    </p>
    <ComponentTwo on:dataChange={eventDispatch}/>
</div>